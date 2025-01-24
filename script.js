document.getElementById('uploadButton').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);

    document.getElementById('loading').style.display = 'block';

    fetch('/data_siswa/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('loading').style.display = 'none';
        console.log('File uploaded successfully:', data);
    })
    .catch(error => {
        document.getElementById('loading').style.display = 'none';
        console.error('Error uploading file:', error);
    });
});