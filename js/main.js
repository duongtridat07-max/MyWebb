$(document).ready(function() {
    $("#btn-submit").click(function() {
        var comment = $("#comment-input").val();
        if(comment.trim() !== "") {
            $("#list-comments").append("<li>" + comment + "</li>");
            $("#comment-input").val("");
        }
    });

    $("#form-login").submit(function(e) {
        e.preventDefault();
        alert("Đang xử lý đăng nhập...");
    });
});