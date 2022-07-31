const Kitap={
    ad: 'Fırtına',
    yazar: 'Shakespeare',
    tarih: 1610
}
const bookTable=
`<table border>
<tbody>
<tr>
<td>Kitap</td>
<td>${Kitap.ad}</td>
</tr>

<tr>
<td>Yazar</td>
<td>${Kitap.yazar}</td>
</tr>

<tr>
<td>Tarih</td>
<td>${Kitap.tarih}</td>
</tr>
</tbody>
</table>
`
document.body.innerHTML=bookTable