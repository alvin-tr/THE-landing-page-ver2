const items = ref([
    {
        title: '1. Các thuật ngữ', key:'1', status: false, children: []
    },
    {
        title: '2. Chính sách hoàn tiền của THE', key: '2', status: false, children: [
            {
                title: '2.1. Phạm vi trách nhiệm', key: '2-1', status: false, children: []
            },
            {
                title: '2.2. Các trường hợp và chính sách', key: '2-2', status: false, children: [
                    {
                        title: '2.2.1. Hủy đơn hàng', key: '2-2-1', status: false, children: []
                    },
                    {
                        title: '2.2.2. Relabel', key: '2-2-2', status: false, children: []
                    },
                    {
                        title: '2.2.3. Đơn hàng thất lạc', key: '2-2-3', status: false, children: []
                    },
                    {
                        title: '2.2.4. Đơn hàng mất mát', key: '2-2-4', status: false, children: []
                    },
                    {
                        title: '2.2.5. Đơn hàng Hư hỏng', key: '2-2-5', status: false, children: []
                    },
                    {
                        title: '2.2.6. Đơn hàng trễ toàn trình', key: '2-2-6', status: false, children: []
                    },
                ]
            },
            {
                title: '2.3. Lưu ý và quy định khác', key: '2-3', status: false, children: []
            },
            {
                title: '2.4. Miễn trừ trách nhiệm', key: '2-4', status: false, children: []
            },
        ]
    },
    {
        title: '3. Quy định về khiếu nại', key: '3', status: false, children: [
            {
                title: '3.1. Thời gian nộp khiếu nại', key: '3-1', status: false, children: []
            },
            {
                title: '3.2. Thời gian giải quyết khiếu nại', key: '3-2', status: false, children: []
            }
        ]
    },
    {
        title: '4. Các Quy định khác', key: '4', status: false, children: [
            {
                title: '4.1. Thời hạn khả dụng của THE tracking                                                                                                                                                                   ', key: '4-1', status: false, children: []
            },
            {
                title: '4.2. Bảo hiểm', key: '4-2', status: false, children: []
            }
        ]
    },
    {
        title: '5. Hàng hóa hạn chế hoặc không nhận vận chuyển', key: '5', status: false, children: []
    }
])

// title: '', key: '', status: false, children: []