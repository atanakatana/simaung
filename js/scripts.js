document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for navbar brand click
    document.querySelector('.navbar-brand').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // Show modal when read more button is clicked
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function () {
            var readMoreModal = new bootstrap.Modal(document.getElementById('readMoreModal'));
            readMoreModal.show();
        });
    });

    // Hide modal properly when closed
    document.getElementById('readMoreModal').addEventListener('hidden.bs.modal', function () {
        this.querySelector('.modal-body').innerHTML = '<p>Penjelasan detail mengenai topik yang dipilih.</p><a href="detail.html" class="btn btn-primary">Kunjungi Halaman</a>';
    });
    // Add event listener for navbar brand click
    document.querySelector('.ovop .navbar-brand').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // Show order detail modal when "Beli" button is clicked
    document.querySelector('.ovop #buyButton').addEventListener('click', function () {
        const address = document.querySelector('.ovop #address').value;
        const quantity = document.querySelector('.ovop #quantity').value;
        const shipping = document.querySelector('.ovop #shipping').value;

        const orderDetails = `
            <p>Alamat Pengiriman: ${address}</p>
            <p>Kuantitas: ${quantity}</p>
            <p>Layanan Pengiriman: ${shipping}</p>
        `;

        document.querySelector('.ovop #orderDetails').innerHTML = orderDetails;

        var orderDetailModal = new bootstrap.Modal(document.querySelector('.ovop #orderDetailModal'));
        orderDetailModal.show();
    });

    // Show alert and redirect to ovop.html when "Konfirmasi Pemesanan" button is clicked
    document.querySelector('.ovop #confirmOrderButton').addEventListener('click', function () {
        alert('Pesanan dikonfirmasi');
        window.location.href = 'ovop.html';
    });

    // Save new address when "Simpan Alamat" button is clicked
    document.querySelector('.ovop #saveAddressButton').addEventListener('click', function () {
        const newAddress = document.querySelector('.ovop #newAddress').value;
        if (newAddress) {
            const addressSelect = document.querySelector('.ovop #address');
            const newOption = document.createElement('option');
            newOption.text = newAddress;
            addressSelect.add(newOption);
            addressSelect.value = newAddress;
            new bootstrap.Modal(document.querySelector('.ovop #addAddressModal')).hide();
        } else {
            alert('Masukkan alamat yang valid.');
        }
    });
});
