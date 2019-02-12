<%@ taglib prefix="c" uri="http://www.springframework.org/tags" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Главная</title>
    <link href="<c:url value="resources/lib/css/bootstrap.css"/>" type="text/css" rel="stylesheet">
    <script src="<c:url value="resources/lib/js/jquery-3.3.1.js"/>" type="text/javascript"></script>
    <script src="<c:url value="resources/lib/js/bootstrap.bundle.js"/>" type="text/javascript"></script>
    <style type="text/css">

        .login-form {
            width: 340px;
            margin: 50px auto;
        }

        .login-form form {
            margin-bottom: 15px;
            background: #f7f7f7;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
            padding: 30px;
        }

        .login-form h2 {
            margin: 0 0 15px;
        }

        .form-control, .btn {
            min-height: 38px;
            border-radius: 2px;
        }

        .btn {
            font-size: 15px;
            font-weight: bold;
        }

    </style>
</head>
<body>
<div class="login-form">

    <form action="/j_spring_security_check" method="post">
        <h2 class="text-center">Войти</h2>
        <div class="form-group">
            <input type="text" class="form-control" name="j_username" placeholder="Логин" required="required">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" name="j_password" placeholder="Пароль" required="required">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Войти</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox" name="_spring_security_remember_me">
                Запомнить</label>
        </div>
    </form>

    <%
        String error = request.getParameter("error");
        if (error != null && error.equals("true")) {
    %>
    <div>Неверные логин и/или пароль!</div>
    <%
        }
    %>

</div>
</body>
</html>