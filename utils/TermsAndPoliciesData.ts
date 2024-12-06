

export const TermsAndPoliciesData = {
    policyTermsData: [
        {
            key: '"THE"',
            content: 'là viết tắt của The Human Express'
        },
        {
            key: '“Khách hàng”',
            content: 'có nghĩa là cá nhân hoặc tổ chức sử dụng Dịch vụ của THE'
        },
        {
            key: '“Đơn hàng”',
            content: 'có nghĩa là thư, gói, kiện hàng hóa hợp pháp được THE chấp nhận, vận chuyển và phát trong hệ thống vận chuyển của THE.'
        },
        {
            key: '“Dịch vụ”',
            content: 'có nghĩa là dịch vụ liên quan việc giao nhận Đơn hàng, bao gồm: chấp nhận, vận chuyển và chuyển phát bằng các phương thức khác nhau từ địa điểm do Khách hàng chỉ định đến địa điểm của người nhận.'
        },
        {
            key: '“Hệ thống”',
            content: 'có nghĩa là phần mềm ứng dụng được cài đặt trên thiết bị di động hoặc website mà THE thiết lập cho việc sử dụng Dịch vụ của Khách hàng, bao gồm tạo, quản lý, theo dõi tiến độ của Đơn hàng; thanh toán cước Dịch vụ; kiểm soát, đối chiếu dữ liệu về Đơn hàng và cước Dịch vụ.'
        },
        {
            key: '“Cước vận chuyển”',
            content: 'được coi là toàn bộ khoản chi phí trực tiếp liên quan đến Dịch vụ (không bao gồm các khoản phát sinh khi sử dụng Dịch vụ) mà Khách hàng cần thanh toán cho THE.'
        },
        {
            key: '"Hủy đơn hàng"',
            content: 'là hành động khách hàng đơn phương chủ động hủy đơn hàng trong hệ thống hoặc đã có sự trao đổi với nhận sự của THE để hủy đơn hàng'
        },
        {
            key: '"Relabel"',
            content: 'là hành động thay đổi label của hàng hóa khi hàng hóa gặp các vấn đề khiến label cũ không đủ điều kiện để thực hiện dịch vụ của THE'
        },
        {
            key: '"Đơn hàng thất lạc"',
            content: 'là đơn hàng mà tình trạng cuối cùng của THE tracking (tracking) dừng hoặc không cập nhật liên tiếp trong 14 ngày làm việc trong điều kiện vận chuyển bình thường và THE không thể cập nhật thêm cho khách hàng về tình trạng của đơn hàng. Điều kiện trên loại trừ bao gồm nhưng không hạn chế các trường hợp sau: Đơn hàng vận chuyển lại, đơn hàng chuyển về kho của THE do sai địa chỉ, đơn hàng khách thay đổi địa chỉ, đơn hàng Relabel, đơn hàng có nhãn vận chuyển (label) bị lỗi...'
        },
        {
            key: '"Đơn hàng trễ toàn trình"',
            content: 'là đơn hàng được giao thành công tới địa chỉ của người nhận nhưng thời điểm giao hàng đã quá 21 ngày so với thời điểm hàng tới kho US của THE'
        },
        {
            key: '"Đơn hàng mất mát"',
            content: 'là đơn hàng mất một hoặc một vài sản phẩm trong đơn hàng đó. Bằng chứng mất hàng được người nhận (recipient) cung cấp bằng chứng thực tế và bằng chứng đó được THE cùng Khách hàng cùng xác nhận.'
        },
        {
            key: '"Đơn hàng hư hỏng"',
            content: 'là đơn hàng hư hỏng một hoặc một vài sản phẩm trong đơn hàng đó. Bằng chứng hư hỏng hàng được người nhận (recipient) cung cấp bằng chứng thực tế và bằng chứng đó được THE cùng Khách hàng cùng xác nhận.'
        },
        {
            key: '"Đơn hàng bảo hiểm"',
            content: 'là đơn hàng của tài khoản đã đăng kí bảo hiểm cho toàn bộ đơn hàng của Khách hàng'
        },
    ],

    policyRefundData: [
        {
            title: 'Phạm vi trách nhiệm',
            key: 'scope-of-responsibility',
            slot: 'scope-of-responsibility',
            tableData: {},
            text: '<span>THE sẽ chịu trách nhiệm hoàn tiền hoặc bồi thường cho Khách hàng nếu đơn hàng gặp các vấn đề được nêu trong mục <b>2.2 Các Trường hợp và chính sách </b> và vấn đề xảy ra trong quá trình cung ứng Dịch vụ gây ra do lỗi của THE. Trách nhiệm của THE chỉ giới hạn trong thiệt hại trực tiếp và thực tế liên quan đến đơn hàng. Các loại thiệt hại hoặc tổn thất khác (bao gồm nhưng không hạn chế: Tổn thất lợi nhuận, thu nhập, cơ hội kinh doanh…) sẽ bị loại trừ.</span>',
            children: []
        },
        {
            title: 'Các trường hợp và chính sách',
            key: 'cases-and-policies',
            slot: 'cases-and-policies',
            text: '',
            tableData: {},
            children: [
                {
                    title: 'Hủy đơn hàng',
                    key: 'cancel-order',
                    slot: 'cancel-order',
                    tableData: {
                        rows: [
                            [
                                { text: 'Trường hợp', colspan: 2 },
                                { text: 'Chính sách xử lý', colspan: 2 }
                            ],
                            [
                                { text: "1. Chưa có Label USPS", colspan: 2 },
                                { text: "Đơn hàng chưa có Label không mất phí" }
                            ],
                            [
                                { text: "2. Đã có label USPS", rowspan: 3 },
                                { text: "Hàng ở trạng thái Pre-transit trong Hệ thống và sau 14 ngày THE chưa nhận được hàng" },
                                { text: "Hệ thống tự động hủy đơn hàng và không được hoàn cước" },
                            ],
                            [
                                { text: "Hàng ở trạng thái Pre-transit trong Hệ thống và Khách hàng chủ động hủy đơn trong vòng 14 ngày" },
                                { text: "Hoàn 100% cước của đơn hàng (không tính phụ phí phát sinh) sau 15 ngày làm việc kể từ thời điểm hủy đơn hàng" },
                            ],
                            [
                                { text: "Hàng ở trạng thái In-transit trong Hệ thống" },
                                { text: "Không được hủy và Không được hoàn cước" }
                            ]
                        ]
                    },
                    text: '',
                    children: []
                },
                {
                    title: 'Relabel',
                    key: 'relabel',
                    tableData: {
                        rows: [
                            [
                                { text: 'Trường hợp', colspan: 1 },
                                { text: 'Chính sách xử lý', colspan: 1 }
                            ],
                            [
                                { text: "1. Label bị mờ/ rách/ mất thông tin,...và hàng vẫn đang lưu tại kho THE ở Việt Nam	" },
                                { text: "Hỗ trợ in và dán mới label miễn phí sau khi đã được sự đồng ý của Khách hàng" },
                            ],
                            [
                                { text: "2. Label sai thông tin người nhận, sai địa chỉ. Hàng vẫn đang ở trạng thái Pre-transit	" },
                                { text: "Khách hàng trả chi phí mua label mới. Hủy Label cũ và fee của label cũ được hoàn vào ví sau 15 ngày kể từ ngày hủy label" }
                            ],
                            [
                                { text: "3. Label sai kích thước. Hàng vẫn đang ở trạng thái Pre-transit	" },
                                { text: "Khách hàng trả chi phí mua label mới. Hủy Label cũ và fee của label cũ được hoàn vào ví sau 15 ngày kể từ ngày hủy label" },
                            ],
                            [
                                { text: "4. Label sai cân nặng - áp dụng cho hàng có cân nặng trong khoảng 0-450g. Hàng vẫn đang ở trạng thái Pre-transit" },
                                { text: "Được giữ nguyên label, không mất phí" }
                            ],
                            [
                                { text: "5. Label sai cân nặng - áp dụng cho hàng có cân nặng lớn hơn 450g. Hàng vẫn đang ở trạng thái Pre-transit" },
                                { text: "Khách hàng trả chi phí mua label mới. Hủy Label cũ và fee của label cũ được hoàn vào ví sau 15 ngày kể từ ngày hủy label" }
                            ],
                            [
                                { text: "6. Relabel do sai địa chỉ, địa chỉ không đầy đủ,thiếu thông tin người nhận,...sau khi giao cho USPS/DHL/UPS/UKecom và hàng đã được hoàn lại kho THE tại US", rowspan: 2 },
                                { text: "Nếu khách hàng có nhu cầu gửi hàng lại, THE hỗ trợ relabel, chi phí do khách hàng trả tùy từng đơn hàng, bao gồm chi phí xử lí và chi phí mua label mới" }
                            ],
                            [
                                { text: "Hủy hàng tại kho THE, chi phí do khách hàng trả nếu phát sinh" }
                            ]
                        ]
                    },
                    text: '',
                    children: []
                },
                {
                    title: 'Đơn hàng thất lạc',
                    key: 'lost-orders',
                    tableData: {
                        rows: [
                            [
                                { text: 'Trường hợp' },
                                { text: 'Chính sách xử lý' }
                            ],
                            [
                                { text: "1. Đơn hàng không mua bảo hiểm hàng hóa" },
                                { text: "Bồi thường tối đa 2.5 (hai phẩy năm) lần Cước vận chuyển và không vượt quá 50 US Dollars (năm mươi đô la Mỹ) cho mỗi đơn hàng." },
                            ],
                            [
                                { text: "2. Đơn hàng mua bảo hiểm 10% (mười phần trăm) giá trị hàng hóa" },
                                { text: "Số tiền bồi thường bằng giá trị hàng hóa mà khách hàng mua bảo hiểm.Với bất kì giá trị hàng hóa nào, THE chỉ bồi thường tối đa 400 USD" },

                            ],
                        ]
                    },
                    text: '',
                    children: []
                },
                {
                    title: 'Đơn hàng mất mát',
                    key: 'lost-or-damaged-orders',
                    tableData: {
                        rows: [
                            [
                                { text: 'Trường hợp' },
                                { text: 'Chính sách xử lý' }
                            ],
                            [
                                { text: "1. Đơn hàng không mua bảo hiểm hàng hóa" },
                                { text: "Số tiền bồi thường = 1.5 x Số lượng sản phẩm bị mất / Tổng sản phẩm có trong đơn hàng x Cước vận chuyển đơn hàng.Tổng số tiền khoản không vượt quá 50 US Dollars (năm mươi đô la Mỹ) cho mỗi đơn hàng." },

                            ],
                            [
                                { text: "2. Đơn hàng mua bảo hiểm 10% (mười phần trăm) giá trị hàng hóa" },
                                { text: "Số tiền bồi thường bằng giá trị những sản phẩm bị mất trong đơn hàng mà khách hàng mua bảo hiểm.Với bất kì giá trị hàng hóa nào, THE chỉ bồi thường tối đa 400 USD" },
                            ],
                        ]
                    },
                    text: '',
                    children: []
                },
                {
                    title: 'Đơn hàng Hư hỏng',
                    key: 'damaged-orders',
                    tableData: {
                        rows: [
                            [
                                { text: 'Trường hợp', colspan: 2 },
                                { text: 'Chính sách xử lý', colspan: 2 }
                            ],
                            [
                                { text: "1. Hàng đã đóng gói theo đúng quy chuẩn của THE bị vỡ/hỏng trong quá trình vận chuyển bởi THE/ đối tác của THE (có thông báo của đơn vị vận chuyển) do lỗi của THE hoặc đối tác của THE và người nhận có video quay lại quá trình mở hàng", rowspan: 2 },
                                { text: "Hàng bị hư hỏng toàn bộ, không sử dụng được và không mua bảo hiểm" },
                                { text: "Bồi thường tối đa 2.5 (hai phẩy năm) lần Cước vận chuyển nhưng không vượt quá 50 US Dollars (năm mươi đô la Mỹ) cho mỗi đơn hàng." },
                            ],
                            [
                                { text: "Hàng bị hư hỏng toàn bộ, không sử dụng được và có mua bảo hiểm" },
                                { text: "Số tiền bồi thường bằng giá trị hàng hóa mà khách hàng mua bảo hiểm.Với bất kì giá trị hàng hóa nào, THE chỉ bồi thường tối đa 400 USD" },
                            ],
                            [
                                { text: "2. Hàng vỡ/hỏng do quy cách đóng gói hàng chưa đảm bảo tính chống va đập và phù hợp với vận chuyển quốc tế hoặc bị hư hỏng trong quá trình vận chuyển bởi 1 bên thứ 3 không phải đối tác của THE ", colspan: 2 },
                                { text: "Không hoàn tiền", colspan: 2 },
                            ],
                        ]
                    },
                    text: '',
                    children: []
                },
                {
                    title: 'Đơn hàng trễ toàn trình',
                    key: 'delayed-orders',
                    tableData: {},
                    text: 'Trong trường hợp Đơn hàng được phát cho người nhận trễ toàn trình thì THE sẽ không tính Cước vận chuyển của Đơn hàng đó. Quy định này không áp dụng cho trường hợp Khách hàng và người nhận đang có tranh chấp về Đơn hàng hoặc THE phát lại/gửi trả Đơn hàng nhưng người nhận không nhận hoặc Khách hàng từ chối nhận lại từ 02 (hai) lần trở lên.',
                    children: []
                },
            ]
        },
        {
            title: 'Lưu ý và quy định khác',
            key: 'other-notes-and-regulations',
            slot: 'other-notes-and-regulations',
            textData: [
                'Tài khoản Khách hàng bị khóa nếu hủy quá 100 đơn hàng đã có Label/day hoặc tổng fee là 1000$',
                'Khách hàng báo cho bộ phận THE Support trong vòng 15 ngày làm việc tính từ ngày có event cuối cùng của mỗi đơn. Sau 15 ngày trên, THE vẫn hỗ trợ kiểm tra và tìm kiếm hàng nhưng sẽ không chịu trách nhiệm hoàn tiền vì THE đã mất quyền can thiệp vào quá trình khiếu nại hàng cho khách.',
                'Mức độ hư hỏng của đơn hàng sẽ do khách hàng và THE cùng xác minh và quyết định.',
                'Trong trường hợp khách hàng cung cấp thông tin không đầy đủ, THE toàn quyền xác minh và quyết định về giá trị đơn hàng và thông tin đơn hàng.',
                'Khách hàng thừa nhận và đồng ý rằng trong mọi trường hợp, khoản tiền bồi thường trên đã bao gồm việc hoàn trả Cước phí Dịch vụ đã thanh toán cho THE',
                'Khách hàng thừa nhận và đồng ý rằng nếu Khách hàng từ chối hoặc không phối hợp để thực hiện đồng kiểm đơn hàng với THE thì trong trường hợp xảy ra mất mát, thất lạc, hư hỏng cho đơn hàng, khoản tiền bồi thường THE phải trả cho Khách hàng sẽ chỉ tối đa bằng 2.5 (hai phẩy năm) lần Cước vận chuyển đã sử dụng nhưng không quá 50 US Dollars (năm mươi đô la Mỹ) cho mỗi Đơn hàng.',
            ],
            tableData: {},
            text: '',
            children: []
        },
    ],

    policyRuleData: [
        {
            title: 'Quy định về khiếu nại',
            key: 'policy-complaint',
            children: [
                {
                    title: 'Thời hạn nộp khiếu nại',
                    key: 'complaint-filing-deadline',
                    text: 'Sau khi nhận được Đơn hàng, đối với trường hợp Đơn hàng mất mát hoặc Đơn hàng hư hỏng, người nhận có thể gửi khiếu nại bằng văn bản đính kèm các bằng chứng hợp lệ và xác thực trong vòng 3 ngày làm việc kể từ ngày kết thúc thời gian toàn trình thực tế. Sau khoảng thời gian này, các khiếu nại sẽ được coi là không hợp lệ.'
                },
                {
                    title: 'Thời hạn giải quyết khiếu nại',
                    key: 'complaint-resolution-deadline',
                    text: 'THE có trách nhiệm và chỉ giới hạn trách nhiệm xử lý với tất cả khiếu nại hợp lệ từ Khách hàng trong vòng 30 (ba mươi) ngày dương lịch, kể từ ngày kết thúc thời gian toàn trình thực tế đối với khiếu nại Đơn hàng mất mát, Đơn hàng hư hỏng, Đơn hàng trễ toàn trình hoặc kể từ trạng thái cuối cùng của Đơn hàng đối với khiếu nại Đơn hàng thất lạc.'
                }
            ]
        },
        {
            title: 'Các Quy định khác',
            key: 'other-regulations',
            children: [
                {
                    title: 'Thời hạn khả dụng của THE tracking',
                    key: 'other-regulations1',
                    text: 'Với tất cả Đơn hàng, Khách hàng có thể sử dụng Hệ thống để tra cứu, tìm kiếm hoặc sử dụng THE tracking trong vòng 100 (một trăm) ngày kể từ ngày Đơn hàng được khởi tạo. Sau khoảng thời gian này, THE tracking sẽ được xoá bỏ khỏi hệ thống, hoặc có thể sử dụng lại cho những Đơn hàng mới trong tương lai'
                },
                {
                    title: 'Bảo hiểm',
                    key: 'other-regulations2',
                    text: 'Bảo hiểm sẽ áp dụng cho từng đơn hàng. Khách hàng có nhu cầu mua bảo hiểm đơn hàng vui lòng liên hệ nhân viên Chăm sóc Khách hàng của THE.'
                }
            ]
        }
    ],

    restrictedGoodsData: [
        'Các loại thuốc chữa bệnh cho người, các loại vắc xin, sinh phẩm y tế, mỹ phẩm, hóa chất và chế phẩm diệt côn trùng, diệt khuẩn trong lĩnh vực gia dụng và y tế chưa được phép sử dụng tại Việt Nam và nước vận chuyển tới.',
        'Địa chỉ APO (Bưu điện Quân đội/Không quân)/FPO (Bưu điện  Hạm đội)/DPO (Bưu điện Ngoại giao).',
        'Thi thể người, nội tạng hoặc bộ phận cơ thể người, phôi thai người hoặc động vật, tro cốt hoặc thi thể người được khai quật.  ',
        'Chất nổ, pháo hoa và các mặt hàng khác có khả năng gây cháy  hoặc dễ cháy. (Chất nổ thuộc Nhóm 1.4 có thể được chấp nhận ở một số quốc gia. Xin liên hệ bộ phận Chăm Sóc Khách Hàng để có thêm thông tin.) ',
        'Hàng nguy hiểm cháy nổ, chất lỏng và bột. Đồ điện tử nên được tháo pin và không đính kèm pin vào trong gói hàng.',
        'Các mặt hàng giống với bom, lựu đạn cầm tay hoặc các thiết bị gây nổ khác, trừ các mặt hàng được nêu tại mục Hàng Hóa Nguy Hiểm. Quy định này bao gồm, nhưng không giới hạn, các sản  phẩm như mô hình, dụng cụ dạy học hoặc tác phẩm nghệ thuật. ',
        'Súng, vũ khí và các bộ phận của súng, vũ khí.',
        'Thiết bị chuyển đổi súng bán tự động và thiết bị cò súng bắn liên thanh. ',
        'Súng ngắn và súng cầm tay khác không có số serial.  ',
        'Bất kỳ súng hoặc vũ ký mà được sản xuất bằng máy in 3-D. ',
        'Máy in 3-D được thiết kế hoặc có tính năng chuyên dùng để sản xuất súng.',
        'Thực phẩm dễ hỏng và thực phẩm, đồ uống cần giữ lạnh hoặc cần có các biện pháp kiểm soát môi trường khác. Trường hợp ngoại lệ cần được thỏa thuận bằng hợp đồng. Đề nghị liên hệ người quản lý tài khoản THE của quý khách hàng để biết thêm thông tin.  ',
        'Động vật sống bao gồm cả côn trùng.',
        'Xác động vật, động vật chết hoặc động vật đã bị nhồi tiêu bản. Các chiến lợi phẩm săn bắt đã qua xử lý hoặc các mẫu vật nguyên con hoặc các bộ phận của động vật đã qua chế biến  hoàn toàn (khô) được chấp nhận để vận chuyển vào Hoa Kỳ. ',
        'Thực vật và nguyên liệu thực vật, bao gồm hoa đã cắt.  ',
        'Vé số và thiết bị đánh bạc trong trường hợp bị cấm bởi quy định pháp luật. ',
        'Tiền/ngoại tệ/tiền mặt (bao gồm các khoản tương đương tiền  như công cụ tiền mặt, cổ phiếu được xác nhận, trái phiếu và  chứng thư tài chính)',
        'Chất thải theo quy định của bất kỳ luật hoặc quy định nào. Bao  gồm nhưng không giới hạn, rác thải y tế (như xi lanh hoặc kim  tiêm dưới da đã qua sử dụng, thiết bị y tế bị ô nhiễm hoặc các  vật phẩm được gửi đi để tiệt trùng, tái chế hay tiêu hủy, pin có  khả năng gây nguy hiểm về an toàn (chẳng hạn như pin đã qua  sử dụng hoặc pin bị hỏng) hoặc các vật dụng gây nguy hiểm cho  môi trường (chẳng hạn như bóng đèn huỳnh quang đã qua sử dụng).',
        'Lô hàng có thể gây thiệt hại, hoặc chậm trễ cho các thiết bị, con người hoặc lô hàng khác.',
        'Lô hàng yêu cầu chúng tôi phải có được giấy phép đặc biệt để vận chuyển, nhập khẩu hoặc xuất khẩu. ',
        'Lô hàng hoặc hàng hóa mà việc vận chuyển, nhập khẩu hoặc xuất khẩu bị cấm bởi bất kỳ luật, quy chế hoặc quy định nào. ',
        'Hàng giả, bao gồm nhưng không giới hạn hàng hóa có nhãn mác tương tự hoặc hầu như không phân biệt được với nhãn hiệu đã đăng ký mà không có sự chấp thuận hoặc giám sát của chủ sở hữu nhãn hiệu đó (còn được gọi là “hàng giả” hoặc “hàng nhái”).',
        'Đồng hồ có giá trị trên 150 US Dollars.',
        'Rượu, các loại đồ uống có cồn.',
        'Nguyên liệu thuốc lá, sản phẩm thuốc lá (kể cả thuốc lá điện tử), giấy vấn điếu thuốc lá; máy móc, thiết bị chuyên ngành sản xuất thuốc lá và phụ tùng thay thế.',
        'Cần sa, được quy định theo luật liên bang Hoa Kỳ, 21 U.S.C.  802(16), bao gồm cần sa phục vụ mục đích giải trí hoặc y tế và  cannabidial (“CBD”) chiết xuất từ cần sa; bất kỳ sản phẩm nào  có chứa tetrahydrocannabinols (“THC”), trừ quy định tại 21 CFR  1308.35; và cần sa tổng hợp.',
        'Cây gai dầu thô và chưa tinh chế hoặc bộ phần của cây gai dầu  (bao gồm nhưng không giới hạn thân, lá, hoa và hạt cây gai dầu),  trừ quy định tại 21 CFR 1308.35, dầu cây gai dầu, dầu hạt cây  gai dầu và CBD chiết xuất từ cây gai dầu.',
        'Các chất mà chưa được chấp thuận để sử dụng cho mục đích y tế bởi Cục Quản Lý Thực Phẩm và Dược Phẩm Hoa Kỳ và được  liệt kê vào Danh Sách Chất Quản Lý bởi Lực Lượng Phòng  Chống Ma Túy Hoa Kỳ, bao gồm nhưng không giới hạn kratom  và Salvia divinorum.',
        'Lô hàng mà giá trị khai báo hải quan vượt quá giá trị được cho phép đối với điểm đến cụ thể. (Xem thêm Mục Giá Trị Khai Báo Hàng Hóa và Giới Hạn Trách Nhiệm trong Quy trình cung ứng dịch vụ THE.) ',
        'Hàng hóa nguy hiểm trừ những hàng hóa được cho phép theo  Mục Hàng Hóa Nguy Hiểm của Điều khoản và Điều kiện dịch vụ THE này.',
        'Các lô hàng nhập dưới hình thức trái phiếu được chuyển đến  hoặc rút khỏi Khu Ngoại Thương hoặc kho ngoại quan, trừ khi  Lựa Chọn Nhà Môi Giới Quốc Tế của THE được chọn cho các  lô hàng nhập khẩu Hoa Kỳ hoặc tùy chọn Dịch Vụ Xuất Khẩu Kiểm Soát Quốc Tế THE được lựa chọn cho các lô hàng xuất  khẩu Hoa Kỳ.',
        'Thuốc lá điện tử và các bộ phận thành phần của chúng, bất kỳ thiết bị tương tự nào khác hoạt động dựa trên quá trình hóa hơi  hoặc tạo khí dung, và bất kỳ chất lỏng hoặc gel không cháy nào, bất kể sự có mặt của nicotin, có thể được sử dụng với bất kỳ thiết bị nào như vậy. ',
        'Các kiện hàng ướt, rò rỉ hoặc có mùi bất kỳ.',
        'Đá ướt (nước đá).',
        'Các loại gel (kem dưỡng, mỹ phẩm) có thể tích trên 50ml.',
        'Sản phẩm động vật, không thuần hóa (bao gồm cả quần áo, phụ kiện trang sức).',
        'Thực vật.',
        'Tài liệu khiêu dâm (dưới mọi hình thức).',
        'Hàng bị luật pháp Việt Nam và các quốc gia vận chuyển tới cấm.',
        'Các sản phẩm khác thuộc danh mục Hàng hóa cấm vận chuyển bằng đường hàng không theo chính sách của đơn vị cung cấp dịch vụ vận chuyển đường hàng không hoặc theo quy định của Nhà nước tùy vào từng thời điểm.',
        'C.O.D. (Trả tiền khi giao hàng)',
        'Các lô hàng có xuất xứ từ bất kỳ quốc gia nào theo giấy phép kiểm soát xuất khẩu quân sự. '
    ]

}
