const nav=document.getElementById('nav'),hamburger=document.getElementById('hamburger');
hamburger.addEventListener('click',()=>{const open=nav.classList.toggle('open');hamburger.textContent=open?'×':'☰';hamburger.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');hamburger.textContent='☰';}));
document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelector('.tab.active')?.classList.remove('active');tab.classList.add('active');const f=tab.dataset.filter;document.querySelectorAll('.dish').forEach(d=>d.classList.toggle('hide',f!=='all'&&d.dataset.type!==f));}));
const toast=document.getElementById('toast');let toastTimer;
function notify(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600);}
document.querySelectorAll('.quick-add').forEach(btn=>btn.addEventListener('click',()=>notify(`تم اختيار ${btn.dataset.name} — أكمل طلبك عبر التواصل معنا.`)));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('bookingForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const msg=`مرحباً، أود طلب حجز مبدئي في MAISON NOIR.%0Aالاسم: ${encodeURIComponent(f.get('name'))}%0Aالهاتف: ${encodeURIComponent(f.get('phone'))}%0Aعدد الضيوف: ${encodeURIComponent(f.get('guests'))}%0Aالتاريخ: ${encodeURIComponent(f.get('date'))}%0Aالوقت: ${encodeURIComponent(f.get('time'))}%0Aملاحظات: ${encodeURIComponent(f.get('notes')||'لا يوجد')}`;const phone='201000000000';window.open(`https://wa.me/${phone}?text=${msg}`,'_blank','noopener');});
const dateInput=document.querySelector('input[name="date"]');const today=new Date();dateInput.min=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
