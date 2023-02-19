let a=true;
while(a==true){
	let nilai = prompt('Masukkan nilai anda :');
	if (nilai>=85 && nilai<=100) {
		alert('A');
	}
	else if (nilai>=70 && nilai<85) {
		alert('B');
	}
	else if (nilai>=55 && nilai<70) {
		alert('C');
	}
	else if (nilai>=40 && nilai<55) {
		alert('D');
	}
	else if (nilai>=0 && nilai<40) {
		alert('E');
	}
	else {
		alert('Nilai yang anda masukkan tidak terdefinisi')
	}
	a=confirm('Apakah mau coba konversi lagi?')
}
alert('Terima Kasih');