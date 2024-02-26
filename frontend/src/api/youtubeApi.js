import axios from "axios";

let keys = [
  "AIzaSyBFlOGOXjfEs_D_sEAeo7jIHpUTSeZLN8s", // youtube1
  "AIzaSyC_VNy1BhOtsrKk0ZjDjRdzhDtnapMVbk0", // youtube2
  "AIzaSyAcxWwtzQSo0ax6chnlyl-SGCbNVVPBGxs", // youtube3
  "AIzaSyDnT1-MLHCTtQlN21gXInpJvhIUd_HRSv8", // youtube4
  "AIzaSyCgOAkrEOdflFLfxZbQnjQgX6M6o9xPzVc", // youtube5
  "AIzaSyDWiJTt4CjBAb3fTT82C2m1ubki1EskK4M", // youtube6
  "AIzaSyCKat1JHfcQllwXYUUiJCoW8E3JKn_Rp30", // youtube7
  "AIzaSyCdUuGvWxjZ2M7vz2KEcsvPrv_BFc1Di5Y", // youtube8
  "AIzaSyDMCqxtvmQy67XAHln-xnLRmQTv2bc3uls", // youtube9
  "AIzaSyB22qdhxGY0KNfAMML_jxHc3WZAZsY8Nz8", // youtube10
  "AIzaSyCz04WPV6NmpOJEr0uvA5sYhd6geHdBeSk", // youtube11
  "AIzaSyAEKTvxhqmKTFiyjklUwLEqTDa3EAPtt7c", // youtube12
];

const instance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBWqhobrT6nFXBQyYjuJcNg6IgsoCy0i48",
  },
});

instance.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    if (error.response) {
      // Xử lý lỗi từ response HTTP
      const { status, data } = error.response;

      // Thông báo lỗi cho người dùng nếu cần thiết
      if (status === 401) {
        // Xử lý lỗi xác thực, chẳng hạn chuyển hướng đến trang đăng nhập
        console.log("Unauthorized error:", data);
      } else {
        // Hiển thị thông báo lỗi cho người dùng
        console.log("An error occurred:", data);
      }
    } else if (error.request) {
      // Xử lý lỗi không có response từ server
      console.log("No response received from server:", error.request);
    } else {
      // Xử lý lỗi khác (lỗi trong quá trình gửi request)
      console.log("Error in request:", error.message);
    }

    // Ghi log hệ thống
    // logErrorToServer(error);

    // Trả về một object chứa thông tin lỗi
    return {
      data: error.response ? error.response.data : null,
      status: error.response ? error.response.status : null,
      headers: error.response ? error.response.headers : null,
    };
  }
);

export default instance;
