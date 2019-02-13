<%@ taglib prefix="c" uri="http://www.springframework.org/tags" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Главная</title>
    <link href="<c:url value="../../resources/lib/css/bootstrap.css"/>" type="text/css" rel="stylesheet">
    <script src="<c:url value="../../resources/lib/js/jquery-3.3.1.js"/>" type="text/javascript"></script>
    <script src="<c:url value="../../resources/lib/js/bootstrap.bundle.js"/>" type="text/javascript"></script>
</head>
<body>
<h1 class="text-center">Hello World!</h1>
<form action="<c:url value="logout" />" method="post" id="logout">
    <input type="hidden" name="${_csrf.parameterName}"
           value="${_csrf.token}"/>
</form>
<div class="container">
    <div class="row">
        <div class="col text-center">
            <button class="btn btn-primary" onclick="document.getElementById('logout').submit();return false">Выйти
            </button>
        </div>
    </div>
</div>
</body>
</html>
