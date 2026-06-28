// ننتظر حتى يتم تحميل الصفحة بالكامل لنبدأ السحر
document.addEventListener("DOMContentLoaded", () => {
    
    // إنشاء خط زمني (Timeline) لربط الحركات ببعضها بتسلسل سينمائي
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. دخول الشريط العلوي (النافيجيشن) من الأعلى
    tl.from(".glass-header", {
        y: -100, // ينزل من فوق
        opacity: 0,
        duration: 1.2
    })
    
    // 2. ظهور النص الرئيسي (كلمة بكلمة أو ككتلة واحدة بحركة بطيئة من الأسفل)
    .from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        skewY: 5, // ميلان خفيف يعطي فخامة
    }, "-=0.5") // يبدأ قبل أن تنتهي حركة الشريط العلوي بنصف ثانية
    
    // 3. ظهور النص الفرعي بسلاسة
    .from(".sub-text", {
        y: 30,
        opacity: 0,
        duration: 1.5
    }, "-=1"); // تداخل في التوقيت لحركة أسرع وأكثر انسيابية

    // تأثير حركة الماوس على الإضاءة الخلفية (Ambient Light)
    // يجعل الإضاءة تتحرك ببطء عكس اتجاه الماوس ليعطي إحساس بالعمق (3D)
    document.addEventListener("mousemove", (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        gsap.to(".ambient-light", {
            x: xAxis,
            y: yAxis,
            duration: 1,
            ease: "power1.out"
        });
    });
});
