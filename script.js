'use strict'

document.querySelector('.Muc-tieu-nghe-nghiep').addEventListener('click',() =>{
  if (document.querySelector('.Muc-tieu-nghe-nghiep-object').style.display === 'none'){
    document.querySelector('.Muc-tieu-nghe-nghiep-object').style.display = 'block'
    document.querySelector('.Muc-tieu-nghe-nghiep').textContent = 'Ẩn'
    document.querySelector('#target-muc-tieu-nghe=nghiep').style.alignSelf = 'flex-start'
  }
else {document.querySelector('.Muc-tieu-nghe-nghiep-object').style.display = 'none'
  document.querySelector('.Muc-tieu-nghe-nghiep').textContent = 'Hiện'
}})

document.querySelector('.Hoc-van').addEventListener('click',() =>{
  if (document.querySelector('.Hoc-van-object').style.display === 'none'){
    document.querySelector('.Hoc-van-object').style.display = 'block'
    document.querySelector('.Hoc-van').textContent = 'Ẩn'
  }
else {document.querySelector('.Hoc-van-object').style.display = 'none'
  document.querySelector('.Hoc-van').textContent = 'Hiện'
}})


document.querySelector('.Kinh-nghiem-lam-viec').addEventListener('click',() =>{
  if (document.querySelector('.Kinh-nghiem-lam-viec-object').style.display === 'none'){
    document.querySelector('.Kinh-nghiem-lam-viec-object').style.display = 'block'
    document.querySelector('.Kinh-nghiem-lam-viec').textContent = 'Ẩn'
  }
else {document.querySelector('.Kinh-nghiem-lam-viec-object').style.display = 'none'
  document.querySelector('.Kinh-nghiem-lam-viec').textContent = 'Hiện'
}})

document.querySelector('.Hoat-dong').addEventListener('click',() =>{
  if (document.querySelector('.Hoat-dong-object').style.display === 'none'){
    document.querySelector('.Hoat-dong-object').style.display = 'block'
    document.querySelector('.Hoat-dong').textContent = 'Ẩn'
  }
else {document.querySelector('.Hoat-dong-object').style.display = 'none'
  document.querySelector('.Hoat-dong').textContent = 'Hiện'
}})

document.querySelector('.Ky-nang').addEventListener('click',() =>{
  if (document.querySelector('.Ky-nang-object').style.display === 'none'){
    document.querySelector('.Ky-nang-object').style.display = 'block'
    document.querySelector('.Ky-nang').textContent = 'Ẩn'
  }
else {document.querySelector('.Ky-nang-object').style.display = 'none'
  document.querySelector('.Ky-nang').textContent = 'Hiện'
}})

document.querySelector('.Ngon-ngu').addEventListener('click',() =>{
  if (document.querySelector('.Ngon-ngu-object').style.display === 'none'){
    document.querySelector('.Ngon-ngu-object').style.display = 'flex'
    document.querySelector('.Ngon-ngu-object').style.gap = '20px'
    document.querySelector('.Ngon-ngu').textContent = 'Ẩn'
  }
else {document.querySelector('.Ngon-ngu-object').style.display = 'none'
  document.querySelector('.Ngon-ngu').textContent = 'Hiện'
}})

document.querySelector('.So-thich').addEventListener('click',() =>{
  if (document.querySelector('.So-thich-object').style.display === 'none'){
    document.querySelector('.So-thich-object').style.display = 'flex'
    document.querySelector('.So-thich-object').style.gap = '10px'
    document.querySelector('.So-thich').textContent = 'Ẩn'
  }
else {document.querySelector('.So-thich-object').style.display = 'none'
  document.querySelector('.So-thich').textContent = 'Hiện'
}})

document.querySelector('.Du-an').addEventListener('click',() =>{
  if (document.querySelector('.Du-an-object').style.display === 'none'){
    document.querySelector('.Du-an-object').style.display = 'flex'
    document.querySelector('.Du-an-object').style.gap = '50px'
     document.querySelector('.Du-an-object').style.justifyContent = 'space-evenly'
    document.querySelector('.Du-an').textContent = 'Ẩn'
  }
else {document.querySelector('.Du-an-object').style.display = 'none'
  document.querySelector('.Du-an').textContent = 'Hiện'
}})




document.querySelector('.check-valid-email').addEventListener('click', () =>{
 
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.querySelector('.email').value.trim())
  if (validEmail){
    document.querySelector('.email-ca-nhan').style.display = 'block'
    document.querySelector('.email').style.display = 'none'
    document.querySelector('.email-label').style.display = 'none'
    document.querySelector('.check-valid-email').style.display = 'none'

  } else if (!validEmail || document.querySelector('.email').value === '' ){
    document.querySelector('.email-label').textContent = 'Lỗi'
  }
})
