/* Tên file: capcut.js */

// Lấy toàn bộ nội dung phản hồi từ máy chủ Capcut
let body = $response.body;
let obj = JSON.parse(body);

// Chèn một thông báo để biết script đã hoạt động
obj.Attention = "Chào mừng đến với Capcut Pro! Vui lòng không chia sẻ cho bất kỳ ai.";

// Định nghĩa thông tin gói đăng ký giả mạo
var fakeSubscription = {
    "is_sandbox": false,
    "ownership_type": "PURCHASED",
    "billing_issues_detected_at": null,
    "period_type": "normal",
    "expires_date": "2099-12-31T23:59:59Z", // Ngày hết hạn
    "grace_period_expires_date": null,
    "unsubscribe_detected_at": null,
    "original_purchase_date": "2025-08-14T01:00:00Z", // Ngày mua
    "purchase_date": "2025-08-14T01:00:00Z",
    "store": "app_store"
};

// Định nghĩa thông tin quyền lợi (entitlement) giả mạo
var fakeEntitlement = {
    "grace_period_expires_date": null,
    "purchase_date": "2025-08-14T01:00:00Z",
    // Tên định danh (identifier) của gói Capcut Pro
    "product_identifier": "com.capcut.pro.yearly",
    "expires_date": "2099-12-31T23:59:59Z"
};

// Áp dụng dữ liệu giả mạo vào phản hồi
// "pro_access" là tên quyền lợi Capcut Pro (cần xác nhận)
obj.subscriber.entitlements["pro_access"] = fakeEntitlement;

// "com.capcut.pro.yearly" là tên gói đăng ký hàng năm
obj.subscriber.subscriptions["com.capcut.pro.yearly"] = fakeSubscription;

// Chuyển đối tượng đã sửa đổi trở lại chuỗi JSON và hoàn tất
$done({body: JSON.stringify(obj)});
