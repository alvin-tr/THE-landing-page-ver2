<template>
  <div
    class="max-w-[844px] py-10 px-5 max-size-lg:py-0 max-size-pro:px-0"
  >
    <!--1. Các thuật ngữ -->
    <section id="section-1">
      <h1 class="text-[30px] font-medium leading-[40px] mb-6 text-black">
        <span class="text-[#0066FF] mr-[12px]">1.</span> Các thuật ngữ
      </h1>
      <ul class="space-y-[24px] text-gray-700 custom-bullet">
        <li v-for="(item, index) in terms" :key="index">
          <strong>{{ item.strong }}</strong>{{ item.content }}
        </li>
      </ul>
    </section>
    <!--2. Chính sách hoàn tiền của THE -->
    <section id="section-2" class="mt-[40px]">
      <h1 class="text-[30px] font-medium leading-[40px] text-black">
        <span class="text-[#0066FF] mr-[12px]">2.</span> Chính sách hoàn tiền
        của THE
      </h1>
      <h2 id="section-2.1">
        <span class="text-[#0066FF] mr-[12px]">2.1</span> Phạm vi trách nhiệm
      </h2>
      <div class="mt-[20px]">
        <span class="text-[14px] font-normal leading-[21px] text-[#333333]"
          >THE sẽ chịu trách nhiệm hoàn tiền hoặc bồi thường cho Khách hàng nếu
          đơn hàng gặp các vấn đề được nêu trong mục
          <strong>2.2 Các Trường hợp và chính sách</strong> và vấn đề xảy ra
          trong quá trình cung ứng Dịch vụ gây ra do lỗi của THE. Trách nhiệm
          của THE chỉ giới hạn trong thiệt hại trực tiếp và thực tế liên quan
          đến đơn hàng. Các loại thiệt hại hoặc tổn thất khác (bao gồm nhưng
          không hạn chế: Tổn thất lợi nhuận, thu nhập, cơ hội kinh doanh…) sẽ bị
          loại trừ.</span
        >
      </div>
      <h2>
        <span id="section-2.2" class="text-[#0066FF] mr-[12px]">2.2</span> Các trường hợp và
        chính sách
      </h2>
      <!-- 2.2.1. Hủy đơn hàng -->
      <h3
      id="section-2.2.1"
        class="text-[20px] text-[#333333] font-medium leading-[32px] tracking-[-0.4px] mt-[20px]"
      >
        <span class="text-[#0066FF] mr-[12px]">2.2.1</span>Hủy đơn hàng
      </h3>
      <!-- table -->
      <div class="w-full overflow-x-scroll">
        <div class="w-full min-w-[809px] flex flex-col mt-[20px]">
          <!-- 1 -->
          <div
            class="bg-[#B6CFF5] flex flex-row p-[20px] rounded-tl-[6px] rounded-tr-[6px]"
          >
            <p
              class="text-[14px] text-[#333333] font-bold leading-[21px] w-[50%]"
            >
              Trường hợp
            </p>
            <p
              class="text-[14px] text-[#333333] font-bold leading-[21px] w-[50%] ml-[20px]"
            >
              Chính sách xử lý
            </p>
          </div>
          <!-- 2 -->
          <div class="flex flex-row">
            <div class="w-[50%] flex flex-row">
              <div
                class="p-[20px] w-[30%] border-l-[1px] border-[#D7D9E5] flex items-center justify-center"
              >
                <p class="txtTable">1. Chưa có Label USPS</p>
              </div>
              <div
                class="p-[20px] w-[70%] border-x-[1px] border-[#D7D9E5] flex items-center justify-center"
              >
                <p class="txtTable">
                  Hàng ở trạng thái Pre-transit trong Hệ thống và sau 14 ngày
                  THE chưa nhận được hàng
                </p>
              </div>
            </div>
            <div class="w-[50%]">
              <div class="flex flex-col">
                <div
                  class="w-full p-[20px] flex items-center justify-start border-b-[1px] border-r-[1px] border-[#D7D9E5]"
                >
                  <p class="txtTable">Đơn hàng chưa có Label không mất phí</p>
                </div>
                <div
                  class="w-full p-[20px] flex items-center justify-start border-r-[1px] border-[#D7D9E5]"
                >
                  <p class="txtTable">
                    Hệ thống tự động hủy đơn hàng và không được hoàn cước
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="flex flex-row border-y-[1px] border-[#D7D9E5]">
            <div class="w-[50%] flex flex-row">
              <div
                class="p-[20px] w-[30%] border-l-[1px] border-[#D7D9E5] flex items-center justify-center"
              >
                <p class="txtTable">2. Đã có label USPS</p>
              </div>
              <div class="flex flex-col w-[70%]">
                <div
                  class="w-full p-[20px] flex items-center justify-start border-b-[1px] border-x-[1px] border-[#D7D9E5]"
                >
                  <p class="txtTable">
                    Hàng ở trạng thái Pre-transit trong Hệ thống và Khách hàng
                    chủ động hủy đơn trong vòng 14 ngày
                  </p>
                </div>
                <div
                  class="w-full p-[20px] flex items-center justify-start border-x-[1px] border-[#D7D9E5]"
                >
                  <p class="txtTable">
                    Hàng ở trạng thái In-transit trong Hệ thống
                  </p>
                </div>
              </div>
            </div>
            <div class="w-[50%]">
              <div class="flex flex-col">
                <div
                  class="w-full p-[20px] flex items-center justify-start border-b-[1px] border-r-[1px] border-[#D7D9E5]"
                >
                  <p class="txtTable">
                    Hoàn 100% cước của đơn hàng (không tính phụ phí phát sinh)
                    sau 15 ngày làm việc kể từ thời điểm hủy đơn hàng
                  </p>
                </div>
                <div
                  class="w-full p-[20px] py-[30px] flex items-center justify-start border-r-[1px] border-[#D7D9E5]"
                >
                  <p class="txtTable">Không được hủy và Không được hoàn cước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- công thức -->
      <div
        class="flex flex-row items-center justify-center mt-[20px] bg-white rounded-[4px] py-[25px] px-[20px]"
      >
        <p class="text-[#333333] font-bold leading-[21px] text-center">
          Khoản bồi thường mất mát
        </p>
        <p
          class="text-[18px] text-[#0066FF] font-medium leading-[28px] mx-[20px] text-center"
        >
          =
        </p>
        <div class="flex flex-col items-center justify-start">
          <p class="text-[#333333] leading-[21px] text-center">
            Số lượng sản phẩm bị mất
          </p>
          <div class="w-full h-[1px] bg-[#D7D9E5] my-[12px]" />
          <p class="text-[#333333] leading-[21px] text-center">
            Tổng số sản phẩm có trong đơn hàng
          </p>
        </div>
        <p
          class="text-[18px] text-[#0066FF] font-medium leading-[28px] mx-[20px]"
        >
          X
        </p>
        <p class="text-[#333333] font-bold leading-[21px] text-center">
          Khoản bồi thường trong bảng 1
        </p>
      </div>
      <!-- 2.2.2 Relabel -->
      <h3
      id="section-2.2.2"
        class="text-[20px] text-[#333333] font-medium leading-[32px] tracking-[-0.4px] mt-[20px]"
      >
        <span class="text-[#0066FF] mr-[12px]">2.2.2</span>Relabel
      </h3>
      <!-- table -->
      <table class="w-full mt-[20px]">
        <tr class="trh">
          <td class="thl">Trường hợp</td>
          <td class="thr">Chính sách xử lý</td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable">
            1. Label bị mờ/ rách/ mất thông tin,...và hàng vẫn đang lưu tại kho
            THE ở Việt Nam
          </td>
          <td class="dataRowTable">
            Hỗ trợ in và dán mới label miễn phí sau khi đã được sự đồng ý của
            Khách hàng
          </td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable">
            2. Label sai thông tin người nhận, sai địa chỉ. Hàng vẫn đang ở
            trạng thái Pre-transit
          </td>
          <td class="dataRowTable">
            Khách hàng trả chi phí mua label mới. Hủy Label cũ và fee của label
            cũ được hoàn vào ví sau 15 ngày kể từ ngày hủy label
          </td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable">
            3. Label sai kích thước. Hàng vẫn đang ở trạng thái Pre-transit
          </td>
          <td class="dataRowTable">
            Khách hàng trả chi phí mua label mới. Hủy Label cũ và fee của label
            cũ được hoàn vào ví sau 15 ngày kể từ ngày hủy label
          </td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable">
            4. Label sai cân nặng - áp dụng cho hàng có cân nặng trong khoảng
            0-450g. Hàng vẫn đang ở trạng thái Pre-transit
          </td>
          <td class="dataRowTable">Được giữ nguyên label, không mất phí</td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable">
            5. Label sai cân nặng - áp dụng cho hàng có cân nặng lớn hơn 450g.
            Hàng vẫn đang ở trạng thái Pre-transit
          </td>
          <td class="dataRowTable">
            Khách hàng trả chi phí mua label mới. Hủy Label cũ và fee của label
            cũ được hoàn vào ví sau 15 ngày kể từ ngày hủy label
          </td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable w-1/2">
            6. Relabel do sai địa chỉ, địa chỉ không đầy đủ, thiếu thông tin
            người nhận,... sau khi giao cho USPS/DHL/UPS/UKecom và hàng đã được
            hoàn lại kho THE tại US
          </td>
          <!-- Cột phải hiển thị theo hàng dọc -->
          <td class="p-0 w-1/2">
            <div class="flex flex-col">
              <div
                class="txtTable px-[20px] py-[20px] border-l-[1px] border-b-[1px] border-[#D7D9E5]"
              >
                Nếu khách hàng có nhu cầu gửi hàng lại, THE hỗ trợ relabel, chi
                phí do khách hàng trả tùy từng đơn hàng, bao gồm chi phí xử lí
                và chi phí mua label mới
              </div>
              <div
                class="txtTable px-[20px] py-[10px] border-l-[1px] border-[#D7D9E5]"
              >
                Hủy hàng tại kho THE, chi phí do khách hàng trả nếu phát sinh
              </div>
            </div>
          </td>
        </tr>
      </table>
      <!-- 2.2.3. Đơn hàng thất lạc -->
      <h3
      id="section-2.2.3"
        class="text-[20px] text-[#333333] font-medium leading-[32px] tracking-[-0.4px] mt-[20px]"
      >
        <span class="text-[#0066FF] mr-[12px]">2.2.3</span>Đơn hàng thất lạc
      </h3>
      <!-- table -->
      <table class="w-full mt-[20px]">
        <tr class="trh">
          <td class="thl !w-[30%]">Trường hợp</td>
          <td class="thr !w-[70%]">Chính sách xử lý</td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable !w-[30%]">
            1. Đơn hàng không mua bảo hiểm hàng hóa
          </td>
          <td class="dataRowTable !w-[70%]">
            Bồi thường tối đa 2.5 (hai phẩy năm) lần Cước vận chuyển và không
            vượt quá 50 US Dollars (năm mươi đô la Mỹ) cho mỗi đơn hàng.
          </td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable !w-[30%]">
            2. Đơn hàng mua bảo hiểm 10% (mười phần trăm) giá trị hàng hóa
          </td>
          <td class="dataRowTable !w-[70%]">
            Số tiền bồi thường bằng giá trị hàng hóa mà khách hàng mua bảo
            hiểm.Với bất kì giá trị hàng hóa nào, THE chỉ bồi thường tối đa 400
            USD
          </td>
        </tr>
      </table>
      <!-- 2.2.4. Đơn hàng mất mát -->
      <h3
      id="section-2.2.4"
        class="text-[20px] text-[#333333] font-medium leading-[32px] tracking-[-0.4px] mt-[20px]"
      >
        <span class="text-[#0066FF] mr-[12px]">2.2.4</span>Đơn hàng mất mát
      </h3>
      <!-- table -->
      <table class="w-full mt-[20px]">
        <tr class="trh">
          <td class="thl !w-[30%]">Trường hợp</td>
          <td class="thr !w-[70%]">Chính sách xử lý</td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable !w-[30%]">
            1. Đơn hàng không mua bảo hiểm hàng hóa
          </td>
          <td class="dataRowTable !w-[70%]">
            Số tiền bồi thường = 1.5 x Số lượng sản phẩm bị mất / Tổng sản phẩm
            có trong đơn hàng x Cước vận chuyển đơn hàng.Tổng số tiền khoản
            không vượt quá 50 US Dollars (năm mươi đô la Mỹ) cho mỗi đơn hàng.
          </td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable !w-[30%]">
            2. Đơn hàng mua bảo hiểm 10% (mười phần trăm) giá trị hàng hóa
          </td>
          <td class="dataRowTable !w-[70%]">
            Số tiền bồi thường bằng giá trị những sản phẩm bị mất trong đơn hàng
            mà khách hàng mua bảo hiểm.Với bất kì giá trị hàng hóa nào, THE chỉ
            bồi thường tối đa 400 USD
          </td>
        </tr>
      </table>
      <!-- 2.2.5. Đơn hàng Hư hỏng -->
      <h3
      id="section-2.2.5"
        class="text-[20px] text-[#333333] font-medium leading-[32px] tracking-[-0.4px] mt-[20px]"
      >
        <span class="text-[#0066FF] mr-[12px]">2.2.5</span>Đơn hàng Hư hỏng
      </h3>
      <table class="w-full mt-[20px]">
        <tr class="trh">
          <td class="thl !w-[70%]">Trường hợp</td>
          <td class="thr !w-[30%]">Chính sách xử lý</td>
        </tr>
        <tr class="rowTable">
          <td class="w-[100%] flex flex-row">
            <div
              class="w-[70%] felex items-center p-[20px] border-r-[1px] border-[#D7D9E5]"
            >
              <p class="txtTable">
                1. Hàng đã đóng gói theo đúng quy chuẩn của THE bị vỡ/hỏng trong
                quá trình vận chuyển bởi THE/ đối tác của THE (có thông báo của
                đơn vị vận chuyển) do lỗi của THE hoặc đối tác của THE và người
                nhận có video quay lại quá trình mở hàng
              </p>
            </div>
            <div class="w-[30%] flex flex-col">
              <div class="p-[20px] border-b-[1px] border-[#D7D9E5]">
                <p class="txtTable">
                  Hàng bị hư hỏng toàn bộ, không sử dụng được và không mua bảo
                  hiểm
                </p>
              </div>
              <div class="p-[20px]">
                <p class="txtTable">
                  Hàng bị hư hỏng toàn bộ, không sử dụng được và có mua bảo hiểm
                </p>
              </div>
            </div>
          </td>
          <td class="w-[30%] p-0 border-l-[1px] border-[#D7D9E5]">
            <div class="flex flex-col p-0">
              <div class="txtTable px-[20px] border-b-[1px] border-[#D7D9E5]">
                Nếu khách hàng có nhu cầu gửi hàng lại, THE hỗ trợ relabel, chi
                phí do khách hàng trả tùy từng đơn hàng, bao gồm chi phí xử lí
                và chi phí mua label mới
              </div>
              <div class="txtTable px-[20px] py-[20px] border-[#D7D9E5]">
                Hủy hàng tại kho THE, chi phí do khách hàng trả nếu phát sinh
              </div>
            </div>
          </td>
        </tr>
        <tr class="rowTable">
          <td class="dataRowTable">
            2. Hàng vỡ/hỏng do quy cách đóng gói hàng chưa đảm bảo tính chống va
            đập và phù hợp với vận chuyển quốc tế hoặc bị hư hỏng trong quá
            trình vận chuyển bởi 1 bên thứ 3 không phải đối tác của THE
          </td>
          <td class="dataRowTable">Không hoàn tiền</td>
        </tr>
      </table>
      <!-- 2.2.6. Đơn hàng trễ toàn trình -->
      <h3
      id="section-2.2.6"
        class="text-[20px] text-[#333333] font-medium leading-[32px] tracking-[-0.4px] mt-[20px]"
      >
        <span class="text-[#0066FF] mr-[12px]">2.2.6</span>Đơn hàng trễ toàn
        trình
      </h3>
      <p class="txtTable mt-[20px]">
        Trong trường hợp Đơn hàng được phát cho người nhận trễ toàn trình thì
        THE sẽ không tính Cước vận chuyển của Đơn hàng đó. Quy định này không áp
        dụng cho trường hợp Khách hàng và người nhận đang có tranh chấp về Đơn
        hàng hoặc THE phát lại/gửi trả Đơn hàng nhưng người nhận không nhận hoặc
        Khách hàng từ chối nhận lại từ 02 (hai) lần trở lên.
      </p>
      <!-- 2.3Lưu ý và quy định khác -->
      <h3
      id="section-2.3"
        class="text-[20px] text-[#333333] font-medium leading-[32px] tracking-[-0.4px] mt-[20px]"
      >
        <span class="text-[#0066FF] mr-[12px]">2.3</span>Lưu ý và quy định khác
      </h3>
      <ul class="space-y-[24px] text-gray-700 mt-[20px] custom-bullet">
        <li>
          Tài khoản Khách hàng bị khóa nếu hủy quá 100 đơn hàng đã có Label/day
          hoặc tổng fee là 1000$
        </li>
        <li>
          Khách hàng báo cho bộ phận THE Support trong vòng 15 ngày làm việc
          tính từ ngày có event cuối cùng của mỗi đơn. Sau 15 ngày trên, THE vẫn
          hỗ trợ kiểm tra và tìm kiếm hàng nhưng sẽ không chịu trách nhiệm hoàn
          tiền vì THE đã mất quyền can thiệp vào quá trình khiếu nại hàng cho
          khách.
        </li>
        <li>
          Mức độ hư hỏng của đơn hàng sẽ do khách hàng và THE cùng xác minh và
          quyết định.
        </li>
        <li>
          Trong trường hợp khách hàng cung cấp thông tin không đầy đủ, THE toàn
          quyền xác minh và quyết định về giá trị đơn hàng và thông tin đơn
          hàng.
        </li>
        <li>
          Khách hàng thừa nhận và đồng ý rằng trong mọi trường hợp, khoản tiền
          bồi thường trên đã bao gồm việc hoàn trả Cước phí Dịch vụ đã thanh
          toán cho THE
        </li>
        <li>
          Khách hàng thừa nhận và đồng ý rằng nếu Khách hàng từ chối hoặc không
          phối hợp để thực hiện đồng kiểm đơn hàng với THE thì trong trường hợp
          xảy ra mất mát, thất lạc, hư hỏng cho đơn hàng, khoản tiền bồi thường
          THE phải trả cho Khách hàng sẽ chỉ tối đa bằng 2.5 (hai phẩy năm) lần
          Cước vận chuyển đã sử dụng nhưng không quá 50 US Dollars (năm mươi đô
          la Mỹ) cho mỗi Đơn hàng.
        </li>
      </ul>
      <!-- 2.4 Miễn trừ trách nhiệm -->
      <h3
      id="section-2.4"
        class="text-[20px] text-[#333333] font-medium leading-[32px] tracking-[-0.4px] mt-[20px]"
      >
        <span class="text-[#0066FF] mr-[12px]">2.4</span>Miễn trừ trách nhiệm
      </h3>
      <p class="txtTable mt-[20px]">
        THE từ chối hỗ trợ và miễn trừ trách nhiệm bồi thường với trường hợp hư
        hỏng hoặc thất lạc, thu giữ, trễ toàn trình… gây ra bởi những nguyên
        nhân(bao gồm nhưng không hạn chế) sau đây:
      </p>
      <ul class="space-y-[24px] text-gray-700 mt-[20px] custom-bullet">
        <li>
          Khách hàng cung cấp địa chỉ Đơn hàng không chính xác (là địa chỉ không
          thể xác nhận bởi USPS hoặc tồn tại trên hệ thống Google Map) hoặc địa
          chỉ thiếu, không chi tiết (ví dụ nằm trong tòa nhà, khu tập thể cần
          ghi rõ ràng số nhà, số phòng, số tầng để đơn vị vận chuyển liên lạc
          khi không được quyền tiếp cận);
        </li>
        <li>Sai lệch tại mức cân nặng 449-454 gram (tương ứng với 1 Pound)</li>
        <div
          class="my-[20px] p-[20px] bg-[#FFF1D6] border-[1px] border-[#FF6200] rounded-[8px]"
        >
          <span class="txtTable !text-[#FF6200]"
            >Lưu ý:
            <span class="txtTable"
              >Với tất cả dịch vụ vận chuyển của THE, để tối ưu thời gian vận
              chuyển và chi phí phát hàng cho khách hàng, những đơn hàng dưới
              mốc cân nặng này và các đơn hàng trên mốc cân nặng này đang được
              sử dụng hai phương thức vận chuyển khác nhau. Vì vậy khi đối tác
              của chúng tôi thực hiện cân lại bằng máy móc, nếu có sự sai lệch
              khối lượng thì sẽ tự động hủy label cũ (mà không cần thông báo
              trước) và thực hiện tạo label mới với dịch vụ mới tương ứng. Vì
              vậy: Khách hàng lưu ý tại các mức cân nặng 447 - 454 gram có thể
              tồn tại rủi ro này. Khách hàng có thể lựa chọn thực hiện khai báo
              thành 454 gram để tránh tình trạng khi đơn hàng được cân lại bởi
              đối tác của chúng tôi sẽ thực hiện relabel đơn hàng. Tracking (THE
              tracking) và label cũ sẽ mất hiệu lực.</span
            ></span
          >
        </div>
        <li>
          Tem vận đơn (label) được dán không đúng cách: Nhăn, rách hoặc bị mờ
          thông tin… gây ra tình huống không thể đọc dữ liệu;
        </li>
        <li>
          Đóng gói, bao bọc Đơn hàng không đầy đủ, không phù hợp, không cẩn
          thận, không tuân thủ quy định, hướng dẫn về đóng gói của THE, nhà sản
          xuất hay quy định của pháp luật;
        </li>
        <li>
          Các sự kiện bất khả kháng (Force Majeure): Thiên tai, dịch bệnh, hoả
          hoạn…
        </li>
        <li>
          Hàng hóa thuộc trường hợp bị cấm gửi, chấp nhận, vận chuyển theo quy
          định của pháp luật;
        </li>
        <li>Khách hàng vi phạm quy định pháp luật.</li>
      </ul>
    </section>
    <!--3. Quy định về khiếu nại -->
    <section id="section-3" class="mt-[40px]">
      <h1 class="text-[30px] font-medium leading-[40px] text-black">
        <span class="text-[#0066FF] mr-[12px]">3.</span> Quy định về khiếu nại
      </h1>
      <h2>
        <span 
        id="section-3.1"
        class="text-[#0066FF] mr-[12px]">3.1</span>Thời hạn nộp khiếu nại
      </h2>
      <p class="txtTable mt-[5px]">
        Sau khi nhận được Đơn hàng, đối với trường hợp Đơn hàng mất mát hoặc Đơn
        hàng hư hỏng, người nhận có thể gửi khiếu nại bằng văn bản đính kèm các
        bằng chứng hợp lệ và xác thực trong vòng 3 ngày làm việc kể từ ngày kết
        thúc thời gian toàn trình thực tế. Sau khoảng thời gian này, các khiếu
        nại sẽ được coi là không hợp lệ.
      </p>
      <h2>
        <span 
        id="section-3.2"
        class="text-[#0066FF] mr-[12px]">3.2</span>Thời hạn giải quyết
        khiếu nại
      </h2>
      <p class="txtTable mt-[5px]">
        THE có trách nhiệm và chỉ giới hạn trách nhiệm xử lý với tất cả khiếu
        nại hợp lệ từ Khách hàng trong vòng 30 (ba mươi) ngày dương lịch, kể từ
        ngày kết thúc thời gian toàn trình thực tế đối với khiếu nại Đơn hàng
        mất mát, Đơn hàng hư hỏng, Đơn hàng trễ toàn trình hoặc kể từ trạng thái
        cuối cùng của Đơn hàng đối với khiếu nại Đơn hàng thất lạc.
      </p>
    </section>
    <!-- 4. Các Quy định khác -->
    <section id="section-4" class="mt-[40px]">
      <h1  class="text-[30px] font-medium leading-[40px] text-black">
        <span class="text-[#0066FF] mr-[12px]">4.</span>Các Quy định khác
      </h1>
      <h2>
        <span id="section-4.1" class="text-[#0066FF] mr-[12px]">4.1</span>Thời hạn khả dụng của
        THE tracking
      </h2>
      <p class="txtTable mt-[5px]">
        Với tất cả Đơn hàng, Khách hàng có thể sử dụng Hệ thống để tra cứu, tìm
        kiếm hoặc sử dụng THE tracking trong vòng 100 (một trăm) ngày kể từ ngày
        Đơn hàng được khởi tạo. Sau khoảng thời gian này, THE tracking sẽ được
        xoá bỏ khỏi hệ thống, hoặc có thể sử dụng lại cho những Đơn hàng mới
        trong tương lai
      </p>
      <h2><span id="section-4.2" class="text-[#0066FF] mr-[12px]">4.2</span>Bảo hiểm</h2>
      <p class="txtTable mt-[5px]">
        Bảo hiểm sẽ áp dụng cho từng đơn hàng. Khách hàng có nhu cầu mua bảo
        hiểm đơn hàng vui lòng liên hệ nhân viên Chăm sóc Khách hàng của THE.
      </p>
    </section>
    <!-- 5. Hàng hóa hạn chế hoặc không nhận vận chuyển -->
    <section id="section-5" class="mt-[40px]">
      <h1 class="text-[30px] font-medium leading-[40px] text-black">
        <span class="text-[#0066FF] mr-[12px]">5.</span>Hàng hóa hạn chế hoặc
        không nhận vận chuyển
      </h1>
      <p class="txtTable mt-[5px]">
        THE cố gắng hỗ trợ vận chuyển tối đa có thể toàn bộ các loại hàng hóa
        trong danh mục hàng hóa của khách hàng. Trong quá trình tư vấn, THE sẽ
        tư vấn chi tiết về tất cả điều kiện, giấy tờ cần thiết phục vụ cho việc
        khai quan và thông quan hàng hóa của quý khách. Những danh sách dưới đây
        được cung cấp bao gồm nhưng không hạn chế những sản phẩm được công bố
        bởi các hãng hàng không, vận chuyển:
      </p>
      <ul class="space-y-[24px] text-gray-700 custom-bullet mt-[15px]">
        <li v-for="goods in nonShippingGoods">
            {{ goods }}
        </li>
        <p class="txtTable mt-[5px]">
          Đối với những hàng hóa trong danh sách trên hoặc bị hạn chế bởi các
          công ty vận chuyển toàn cầu, Khách hàng vẫn chấp nhận gửi hàng bằng
          đường Hàng không việc trễ toàn trình hoặc Đơn hàng bị cơ quan chức
          năng tịch thu, THE sẽ được miễn trừ trách nhiệm pháp lý và không hỗ
          trợ đền bù (nếu có)
        </p>
      </ul>
    </section>
  </div>
</template>

<script setup>
const terms = [
  { strong: '"THE"', content: ' là viết tắt của The Human Express' },
  {
    strong: '"Khách hàng"',
    content: ' có nghĩa là cá nhân hoặc tổ chức sử dụng Dịch vụ của THE',
  },
  {
    strong: '"Đơn hàng"',
    content:
      ' có nghĩa là thư, gói, kiện hàng hóa hợp pháp được THE chấp nhận, vận chuyển và phát trong hệ thống vận chuyển của THE.',
  },
  {
    strong: '"Dịch vụ"',
    content:
      ' có nghĩa là dịch vụ liên quan việc giao nhận Đơn hàng, bao gồm: chấp nhận, vận chuyển và chuyển phát bằng các phương thức khác nhau từ địa điểm do Khách hàng chỉ định đến địa điểm của người nhận.',
  },
  {
    strong: '"Hệ thống"',
    content:
      ' có nghĩa là phần mềm ứng dụng được cài đặt trên thiết bị di động hoặc website mà THE thiết lập cho việc sử dụng Dịch vụ của Khách hàng, bao gồm tạo, quản lý, theo dõi tiến độ của Đơn hàng; thanh toán cước Dịch vụ; kiểm soát, đối chiếu dữ liệu về Đơn hàng và cước Dịch vụ.',
  },
  {
    strong: '"Cước vận chuyển"',
    content:
      ' được coi là toàn bộ khoản chi phí trực tiếp liên quan đến Dịch vụ (không bao gồm các khoản phát sinh khi sử dụng Dịch vụ) mà Khách hàng cần thanh toán cho THE',
  },
  {
    strong: '"Hủy đơn hàng"',
    content:
      ' là hành động khách hàng đơn phương chủ động hủy đơn hàng trong hệ thống hoặc đã có sự trao đổi với nhân sự của THE để hủy đơn hàng.',
  },
  {
    strong: '"Relabel"',
    content:
      ' là hành động thay đổi label của hàng hóa khi hàng hóa gặp các vấn đề khiến label cũ không đủ điều kiện để thực hiện dịch vụ của THE.',
  },
  {
    strong: '"Đơn hàng thất lạc"',
    content:
      ' là đơn hàng mà tình trạng cuối cùng của THE tracking (tracking) dừng hoặc không cập nhật liên tiếp trong 14 ngày làm việc trong điều kiện vận chuyển bình thường và THE không thể cập nhật thêm cho khách hàng về tình trạng của đơn hàng. Điều kiện trên loại trừ bao gồm nhưng không hạn chế các trường hợp sau: Đơn hàng vận chuyển lại, đơn hàng chuyển về kho của THE do sai địa chỉ, đơn hàng khách thay đổi địa chỉ, đơn hàng Relabel, đơn hàng có nhãn vận chuyển (label) bị lỗi...',
  },
  {
    strong: '"Đơn hàng trễ thời trình"',
    content:
      ' là đơn hàng được giao thành công tới địa chỉ của người nhận nhưng thời điểm giao hàng đã quá 21 ngày so với thời điểm hàng tới kho US của THE.',
  },
  {
    strong: '"Đơn hàng mất mát"',
    content:
      ' là đơn hàng mất một hoặc một vài sản phẩm trong đơn hàng đó. Bằng chứng mất hàng được người nhận (recipient) cung cấp bằng chứng thực tế và bằng chứng đó được THE cùng Khách hàng cùng xác nhận.',
  },
]
const nonShippingGoods = [
        "Các loại thuốc chữa bệnh cho người, các loại vắc xin, sinh phẩm y tế, mỹ phẩm, hóa chất và chế phẩm diệt côn trùng, diệt khuẩn trong lĩnh vực gia dụng và y tế chưa được phép sử dụng tại Việt Nam và nước vận chuyển tới.",
        "Địa chỉ APO (Bưu điện Quân đội/Không quân)/FPO (Bưu điện  Hạm đội)/DPO (Bưu điện Ngoại giao).",
        "Thi thể người, nội tạng hoặc bộ phận cơ thể người, phôi thai người hoặc động vật, tro cốt hoặc thi thể người được khai quật.",
        "Chất nổ, pháo hoa và các mặt hàng khác có khả năng gây cháy  hoặc dễ cháy. (Chất nổ thuộc Nhóm 1.4 có thể được chấp nhận ở một số quốc gia. Xin liên hệ bộ phận Chăm Sóc Khách Hàng để có thêm thông tin.) ",
        "Hàng nguy hiểm cháy nổ, chất lỏng và bột. Đồ điện tử nên được tháo pin và không đính kèm pin vào trong gói hàng.",
        "Các mặt hàng giống với bom, lựu đạn cầm tay hoặc các thiết bị gây nổ khác, trừ các mặt hàng được nêu tại mục Hàng Hóa Nguy Hiểm. Quy định này bao gồm, nhưng không giới hạn, các sản  phẩm như mô hình, dụng cụ dạy học hoặc tác phẩm nghệ thuật. ",
        "Súng, vũ khí và các bộ phận của súng, vũ khí.",
        "Thiết bị chuyển đổi súng bán tự động và thiết bị cò súng bắn liên thanh.",
        "Súng ngắn và súng cầm tay khác không có số serial.",
        "Bất kỳ súng hoặc vũ ký mà được sản xuất bằng máy in 3-D.",
        "Máy in 3-D được thiết kế hoặc có tính năng chuyên dùng để sản xuất súng.",
        "Thực phẩm dễ hỏng và thực phẩm, đồ uống cần giữ lạnh hoặc cần có các biện pháp kiểm soát môi trường khác. Trường hợp ngoại lệ cần được thỏa thuận bằng hợp đồng. Đề nghị liên hệ người quản lý tài khoản THE của quý khách hàng để biết thêm thông tin.",
        "Động vật sống bao gồm cả côn trùng.",
        "Xác động vật, động vật chết hoặc động vật đã bị nhồi tiêu bản. Các chiến lợi phẩm săn bắt đã qua xử lý hoặc các mẫu vật nguyên con hoặc các bộ phận của động vật đã qua chế biến  hoàn toàn (khô) được chấp nhận để vận chuyển vào Hoa Kỳ.",
        "Thực vật và nguyên liệu thực vật, bao gồm hoa đã cắt.",
        "Vé số và thiết bị đánh bạc trong trường hợp bị cấm bởi quy định pháp luật.",
        "Tiền/ngoại tệ/tiền mặt (bao gồm các khoản tương đương tiền  như công cụ tiền mặt, cổ phiếu được xác nhận, trái phiếu và  chứng thư tài chính)",
        "Chất thải theo quy định của bất kỳ luật hoặc quy định nào. Bao  gồm nhưng không giới hạn, rác thải y tế (như xi lanh hoặc kim  tiêm dưới da đã qua sử dụng, thiết bị y tế bị ô nhiễm hoặc các  vật phẩm được gửi đi để tiệt trùng, tái chế hay tiêu hủy, pin có  khả năng gây nguy hiểm về an toàn (chẳng hạn như pin đã qua  sử dụng hoặc pin bị hỏng) hoặc các vật dụng gây nguy hiểm cho  môi trường (chẳng hạn như bóng đèn huỳnh quang đã qua sử dụng).",
        "Lô hàng có thể gây thiệt hại, hoặc chậm trễ cho các thiết bị, con người hoặc lô hàng khác.",
        "Lô hàng yêu cầu chúng tôi phải có được giấy phép đặc biệt để vận chuyển, nhập khẩu hoặc xuất khẩu.",
        'Lô hàng hoặc hàng hóa mà việc vận chuyển, nhập khẩu hoặc xuất khẩu bị cấm bởi bất kỳ luật, quy chế hoặc quy định nào.',
        "Hàng giả, bao gồm nhưng không giới hạn hàng hóa có nhãn mác tương tự hoặc hầu như không phân biệt được với nhãn hiệu đã đăng ký mà không có sự chấp thuận hoặc giám sát của chủ sở hữu nhãn hiệu đó (còn được gọi là “hàng giả” hoặc “hàng nhái”).",
        "Đồng hồ có giá trị trên 150 US Dollars.",
        "Rượu, các loại đồ uống có cồn.",
        "Nguyên liệu thuốc lá, sản phẩm thuốc lá (kể cả thuốc lá điện tử), giấy vấn điếu thuốc lá; máy móc, thiết bị chuyên ngành sản xuất thuốc lá và phụ tùng thay thế.",
        "Cần sa, được quy định theo luật liên bang Hoa Kỳ, 21 U.S.C.  802(16), bao gồm cần sa phục vụ mục đích giải trí hoặc y tế và  cannabidial (“CBD”) chiết xuất từ cần sa; bất kỳ sản phẩm nào  có chứa tetrahydrocannabinols (“THC”), trừ quy định tại 21 CFR  1308.35; và cần sa tổng hợp.",
        "Cây gai dầu thô và chưa tinh chế hoặc bộ phần của cây gai dầu  (bao gồm nhưng không giới hạn thân, lá, hoa và hạt cây gai dầu),  trừ quy định tại 21 CFR 1308.35, dầu cây gai dầu, dầu hạt cây  gai dầu và CBD chiết xuất từ cây gai dầu.",
        "Các chất mà chưa được chấp thuận để sử dụng cho mục đích y tế bởi Cục Quản Lý Thực Phẩm và Dược Phẩm Hoa Kỳ và được  liệt kê vào Danh Sách Chất Quản Lý bởi Lực Lượng Phòng  Chống Ma Túy Hoa Kỳ, bao gồm nhưng không giới hạn kratom  và Salvia divinorum.",
        "Lô hàng mà giá trị khai báo hải quan vượt quá giá trị được cho phép đối với điểm đến cụ thể. (Xem thêm Mục Giá Trị Khai Báo Hàng Hóa và Giới Hạn Trách Nhiệm trong Quy trình cung ứng dịch vụ THE.) ",
        "Hàng hóa nguy hiểm trừ những hàng hóa được cho phép theo  Mục Hàng Hóa Nguy Hiểm của Điều khoản và Điều kiện dịch vụ THE này.",
        "Các lô hàng nhập dưới hình thức trái phiếu được chuyển đến  hoặc rút khỏi Khu Ngoại Thương hoặc kho ngoại quan, trừ khi  Lựa Chọn Nhà Môi Giới Quốc Tế của THE được chọn cho các  lô hàng nhập khẩu Hoa Kỳ hoặc tùy chọn Dịch Vụ Xuất Khẩu Kiểm Soát Quốc Tế THE được lựa chọn cho các lô hàng xuất  khẩu Hoa Kỳ.",
        "Thuốc lá điện tử và các bộ phận thành phần của chúng, bất kỳ thiết bị tương tự nào khác hoạt động dựa trên quá trình hóa hơi  hoặc tạo khí dung, và bất kỳ chất lỏng hoặc gel không cháy nào, bất kể sự có mặt của nicotin, có thể được sử dụng với bất kỳ thiết bị nào như vậy. ",
        "Các kiện hàng ướt, rò rỉ hoặc có mùi bất kỳ.",
        "Đá ướt (nước đá).",
        "Các loại gel (kem dưỡng, mỹ phẩm) có thể tích trên 50ml.",
        "Sản phẩm động vật, không thuần hóa (bao gồm cả quần áo, phụ kiện trang sức).",
        "Thực vật.",
        "Tài liệu khiêu dâm (dưới mọi hình thức).",
        "Hàng bị luật pháp Việt Nam và các quốc gia vận chuyển tới cấm.",
        "Các sản phẩm khác thuộc danh mục Hàng hóa cấm vận chuyển bằng đường hàng không theo chính sách của đơn vị cung cấp dịch vụ vận chuyển đường hàng không hoặc theo quy định của Nhà nước tùy vào từng thời điểm.",
        "C.O.D. (Trả tiền khi giao hàng).",
        "Các lô hàng có xuất xứ từ bất kỳ quốc gia nào theo giấy phép kiểm soát xuất khẩu quân sự."
      ]


      
</script>

<style scoped>
.custom-bullet li {
  position: relative;
  padding-left: 23px;
}

.custom-bullet li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6rem;
  /* Adjust for alignment */
  width: 0.5rem;
  height: 0.5rem;
  background-color: #0066ff;
  border-radius: 50%;
}
.h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #333333;
  letter-spacing: -1px;
  margin-top: 10px;
}
h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #333333;
  letter-spacing: -1px;
  margin-top: 10px;
}

.trh {
  background: #b6cff5;
  border-width: 1px;
  border-color: #b6cff5;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.thl {
  color: #333333;
  line-height: 21px;
  font-weight: 500;
  width: 50%;
  padding: 20px;
  border-top-left-radius: 6px;
}

.thr {
  color: #333333;
  line-height: 21px;
  font-weight: 500;
  width: 50%;
  padding: 20px;
  border-top-right-radius: 6px;
}

.txtTable {
  color: #333333;
  line-height: 21px;
  font-weight: 500;
}

.rowTable {
  border-width: 1px;
  border-color: #d7d9e5;
}

.dataRowTable {
  color: #333333;
  line-height: 21px;
  font-weight: 500;
  width: 50%;
  padding-inline: 20px;
  padding-block: 20px;
  border-left-width: 1px;
  border-color: #d7d9e5;
}

@media screen and (max-width: 425px) {
  .dataRowTable {
    padding-inline: 5px;
    padding-block: 5px;
  }
}
</style>
