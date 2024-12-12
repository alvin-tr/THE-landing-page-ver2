export const regex = {
  noSpecialRegex:
    /^[a-zA-Z0-9àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+$/,

  emailRegex:
    /^[a-zA-Z0-9](?!.*\.\.)[a-zA-Z0-9.]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  hasNumberRegex: /\d/,
  hasUppercaseRegex: /[A-Z]/,
  hasLowercaseRegex: /[a-z]/,
  isPhoneNumberRegex: /^([0-9]{9,10})$/,
  numericRegex: /^\d+$/,
  noSpecialAndNoCharVNChar: /^[A-Za-z0-9 ]+$/,
  number: /\d+/g,
  notHasSpecial:
    /[^a-zA-Z0-9àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ\s]+/g,
};
