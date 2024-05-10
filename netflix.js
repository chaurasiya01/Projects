const sel=document.getElementById("sel");
const h2=document.getElementById("chng");
const sinup=document.getElementById("sinup");
const inp=document.getElementById("in");
const h31=document.getElementById("h31");
const p1=document.getElementById("p1");
const bt2=document.getElementById("bt2");
const h21=document.getElementById("h21");
const h22=document.getElementById("h22");
const h23=document.getElementById("h23");
const h24=document.getElementById("h24");
const p2=document.getElementById("p2");
const p3=document.getElementById("p3");
const p4=document.getElementById("p4");
const p5=document.getElementById("p5");
 const img2=document.getElementById("img2");
sel.onchange=()=>{
    let val=sel.value;
    if(val=="hid"){
     h2.textContent="अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ";
     h31.textContent="जहां चाहें देखें. जब चाहें कैंसल करें.";
     h2.style.fontSize="30px";
     h31.style.fontWeight="bold";
     sinup.textContent="साइन इन करें";
     inp.setAttribute('placeholder',"ई-मेल एड्रेस");
    
     p1.textContent="देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.";
     p1.style.fontWeight="bold";
     bt2.textContent="शुरू करे";
     h21.textContent="अपने टीवी पर आनंद लें";
     h22.textContent="ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें";
     h23.textContent="हर जगह देखें";
     h24.textContent="बच्चों के लिए प्रोफ़ाइल बनाएं";
     p2.textContent="स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.";
     p3.textContent="अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.";
     p4.textContent="बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.";
     p5.textContent="बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.";
    
    }
    else{
        location.reload(true);
    }
     
}
 