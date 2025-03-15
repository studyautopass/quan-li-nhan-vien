document.getElementById('addEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const maNV = document.getElementById('maNV').value;
    const tenNV = document.getElementById('tenNV').value;
    const ngaySinh = document.getElementById('ngaySinh').value;
    const gioiTinh = document.getElementById('gioiTinh').value;
    const diaChi = document.getElementById('diaChi').value;
    const soDT = document.getElementById('soDT').value;
    const maPhong = document.getElementById('maPhong').value;

    if (maNV && tenNV && ngaySinh && gioiTinh && diaChi && soDT && maPhong) {
        // Lưu thông tin nhân viên mới vào localStorage hoặc gửi đến server
        const newEmployee = { maNV, tenNV, ngaySinh, gioiTinh, diaChi, soDT, maPhong };
        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));

        // Chuyển hướng về trang nhanvien.html
        window.location.href = 'nhanvien.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});