class ArrayQuery {
  constructor() {
    this.primitiveTypeStrings = [
      "string",
      "number",
      "boolean",
      "null",
      "undefined",
      "symbol",
      "bigint",
    ];

    this.arrOperationCondition = {
      $or: (value, condition, index) => {
        try {
          return condition.some((item) =>
            this.evaluateConditions(value, item, index)
          );
        } catch (error) {
          return false;
        }
      },
      $and: (value, condition, index) => {
        return condition.every((item) => {
          return this.evaluateConditions(value, item, index);
        });
      },
    };

    this.primitiveOperation = {
      $gt: (value, condition) => value > condition,
      $gte: (value, condition) => value >= condition,
      $lt: (value, condition) => value < condition,
      $lte: (value, condition) => value <= condition,
      $ne: (value, condition) => value !== condition,
      $in: (value, condition) => {
        return condition.includes(value);
      },
      $nin: (value, condition) => {
        return !condition.includes(value);
      },
      $exists: (value, condition) => {
        return condition ? value !== undefined : value === undefined;
      },
      $index: (value, condition, index) => {
        return index === condition;
      },
    };

    this.arrayOperation = {
      $all: (value = [], conditions = []) => {
        if (!Array.isArray(value) || !Array.isArray(conditions)) return false;
        if (value.length === 0 || conditions.length === 0) return false;

        return conditions.every((condition) => {
          if (this.primitiveTypeStrings.includes(typeof condition)) {
            // For primitive types, simply check if the value array includes the condition
            return value.includes(condition);
          } else if (typeof condition === "object") {
            // For object conditions, use evaluateConditions on each element in value
            return value.some((item) =>
              this.evaluateConditions(item, condition)
            );
          }
          return false;
        });
      },
      $elemMatch: (value, condition) => {
        if (!Array.isArray(value)) return false;
        if (value.length === 0) return false;
        return this.findOne(value, condition);
      },
      $size: (value = [], condition) => {
        if (!Array.isArray(value)) return false;
        return value.length === condition;
      },
    };

    this.operation = {
      ...this.arrOperationCondition,
      ...this.primitiveOperation,
      ...this.arrayOperation,
    };
  }
  sortItemToFirstArrayByKey = (arr, key, value) => {
    // Tạo một bản sao của mảng gốc
    const newArr = arr.slice();

    // Sắp xếp mảng sao cho phần tử có key = value sẽ được đưa lên đầu
    return newArr.sort((a, b) =>
      a[key] === value ? -1 : b[key] === value ? 1 : 0
    );
  };
  find(arr = [], conditions = {}) {
    return arr.filter((item, index) => {
      return this.evaluateConditions(item, conditions, index);
    });
  }
  findOne(arr = [], conditions = {}) {
    return arr.find((item, index) => {
      return this.evaluateConditions(item, conditions, index);
    });
  }

  evaluateConditions(item, conditions, index) {
    if (conditions === null) return item === conditions;
    return Object.keys(conditions).every((key) => {
      if (key in this.operation) {
        return this.operation[key](item, conditions[key], index);
      }

      const value = this.getDataByKeyStringFromObject(key, item);
      const conditionValue = conditions[key];

      if (typeof conditionValue !== "object") return value === conditionValue;
      if (typeof value === "object") {
        return this.evaluateConditions(value, conditionValue);
      }
      if (Array.isArray(conditionValue)) return value === conditionValue;

      for (let op in this.operation) {
        if (op in conditionValue) {
          return this.operation[op](value, conditionValue[op]);
        }
      }
    });
  }

  getDataByKeyStringFromObject(keyString, obj = {}) {
    return keyString
      .split(".")
      .reduce((current, key) => (current ? current[key] : undefined), obj);
  }
}

export default new ArrayQuery();
