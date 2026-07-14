/**index.html */
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('main-menu-mobile'); 
    menuToggle.addEventListener('click', () => { 
        menuToggle.classList.toggle('open'); 
        mobileMenu.classList.toggle('hidden'); 
        mobileMenu.classList.toggle('flex'); 
    });

    let currentSlide = 0;
    const slidesContainer = document.getElementById('banner-slides');
    const slides = document.querySelectorAll('.banner-slider .slides img');
    const totalSlides = slides.length;
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const dotsContainer = document.getElementById('slider-dots');
    const updateSlider = () => { const offset = -currentSlide * 100 / totalSlides; slidesContainer.style.transform = `translateX(${offset}%)`; updateDots(); };
    const updateDots = () => { dotsContainer.innerHTML = ''; slides.forEach((_, index) => { const dot = document.createElement('span'); dot.classList.add('dot'); if (index === currentSlide) { dot.classList.add('active'); } dot.addEventListener('click', () => { currentSlide = index; updateSlider(); }); dotsContainer.appendChild(dot); }); };
    const nextSlide = () => { currentSlide = (currentSlide + 1) % totalSlides; updateSlider(); };
    const prevSlide = () => { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateSlider(); };
    nextButton.addEventListener('click', nextSlide); prevButton.addEventListener('click', prevSlide);
    updateSlider(); setInterval(nextSlide, 5000); 

    const API_KEY = "sua_chave"; 
    const API_URL = `sua_chave_url`;
    const stylePrompt = document.getElementById('style-prompt');
    const generateBtn = document.getElementById('generate-style-btn');
    const resultadoDiv = document.getElementById('resultado-estilo');
    const loadingIndicator = document.getElementById('loading-indicator');
    function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
    async function getStyleSuggestion(prompt) {
        const systemPrompt = `Você é um Personal Stylist da Mega Modas. Analise a ocasião ou o humor fornecido e sugira um look completo (roupa principal, calçado e um acessório), com um tom de voz entusiasta, confiante e inspirador, focado em tendências da moda feminina. O look deve ser ideal para a cliente. Responda em Português (Brasil).`;
        const userQuery = `Minha ocasião/necessidade é: ${prompt}`;
        const payload = { contents: [{ parts: [{ text: userQuery }] }], systemInstruction: { parts: [{ text: systemPrompt }] }, };
        let lastError = null;
        for (let i = 0; i < 3; i++) { 
            try {
                const response = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
                const result = await response.json();
                const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) return text; else throw new Error("Resposta da API vazia ou inesperada.");
            } catch (error) { lastError = error; console.error(`Tentativa ${i + 1} falhou:`, error); if (i < 2) await sleep(Math.pow(2, i) * 1000); }
        }
        throw new Error("Todas as tentativas de conexão com a API falharam: " + lastError.message);
    }
    generateBtn.addEventListener('click', async () => {
        const prompt = stylePrompt.value.trim();
        if (!prompt) { resultadoDiv.innerHTML = '<p class="text-[#e91e63] font-semibold">Por favor, descreva o que você precisa para a sua consultoria de estilo.</p>'; return; }
        resultadoDiv.innerHTML = ''; loadingIndicator.classList.remove('hidden'); generateBtn.disabled = true;
        try {
            const suggestion = await getStyleSuggestion(prompt);
            const formattedSuggestion = suggestion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>'); 
            resultadoDiv.innerHTML = `<h3 class="text-xl font-bold mb-3 text-[#e91e63]">🎉 Seu Look Exclusivo!</h3><p>${formattedSuggestion}</p>`;
        } catch (error) { console.error("Erro na consultoria:", error); resultadoDiv.innerHTML = `<h3 class="text-xl font-bold mb-3 text-[#e91e63]">Ops, Ocorreu um Erro!</h3><p>Não foi possível gerar a sugestão de look no momento. Por favor, tente novamente mais tarde.</p><p class="text-sm italic text-gray-500">Detalhe: ${error.message}</p>`; } finally { loadingIndicator.classList.add('hidden'); generateBtn.disabled = false; }
    });

/** prod1.html */

      document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('btnReserva');
            const originalColor = '#333';
            const hoverColor = '#e91e63';
            
            // Mouse Over (Hover)
            btn.addEventListener('mouseover', () => {
                btn.style.backgroundColor = hoverColor;
                btn.style.transform = 'scale(1.02)';
                btn.style.cursor = 'pointer';
            });
            
            // Mouse Out (Remover Hover)
            btn.addEventListener('mouseout', () => {
                btn.style.backgroundColor = originalColor;
                btn.style.transform = 'scale(1)';
            });
        });
    // --- JS Menu Mobile ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('main-menu-mobile'); 
    const submenuItems = document.querySelectorAll('#main-menu-mobile .has-submenu > a');
    const mdBreakpoint = 768; 
    menuToggle.addEventListener('click', () => { menuToggle.classList.toggle('open'); mobileMenu.classList.toggle('hidden'); mobileMenu.classList.toggle('flex'); });
    submenuItems.forEach(link => { link.addEventListener('click', (e) => { if (window.innerWidth < mdBreakpoint) { e.preventDefault(); const parentLi = link.closest('.has-submenu'); parentLi.classList.toggle('submenu-open'); } }); });

    // --- JS Slider ---
    let currentSlide = 0;
    const slidesContainer = document.getElementById('banner-slides');
    const slides = document.querySelectorAll('.banner-slider .slides img');
    const totalSlides = slides.length;
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const dotsContainer = document.getElementById('slider-dots');
    const updateSlider = () => { const offset = -currentSlide * 100 / totalSlides; slidesContainer.style.transform = `translateX(${offset}%)`; updateDots(); };
    const updateDots = () => { dotsContainer.innerHTML = ''; slides.forEach((_, index) => { const dot = document.createElement('span'); dot.classList.add('dot'); if (index === currentSlide) { dot.classList.add('active'); } dot.addEventListener('click', () => { currentSlide = index; updateSlider(); }); dotsContainer.appendChild(dot); }); };
    const nextSlide = () => { currentSlide = (currentSlide + 1) % totalSlides; updateSlider(); };
    const prevSlide = () => { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateSlider(); };
    nextButton.addEventListener('click', nextSlide); prevButton.addEventListener('click', prevSlide);
    updateSlider(); setInterval(nextSlide, 5000); 

/** produtos.html */

        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('main-menu-mobile'); 
        menuToggle.addEventListener('click', () => { 
            menuToggle.classList.toggle('open'); 
            mobileMenu.classList.toggle('hidden'); 
            mobileMenu.classList.toggle('flex'); 
        });