document.getElementById('addEmployee').addEventListener('click', function() {
    // Chuyển hướng đến trang thêm nhân viên
    window.location.href = 'add_employee.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const table = document.getElementById('employeeTable');
    employees.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.maNV}</td>
            <td>${employee.tenNV}</td>
            <td>${employee.ngaySinh}</td>
            <td>${employee.gioiTinh}</td>
            <td>${employee.diaChi}</td>
            <td>${employee.soDT}</td>
            <td>${employee.maPhong}</td>
            <td><button class="edit">Sửa</button> <button class="delete">Xóa</button></td>
        `;
        table.appendChild(row);
    });
});