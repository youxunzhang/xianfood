// 景点数据
const attractionsData = [
    {
        id: 1,
        name: {
            zh: "兵马俑博物馆",
            en: "Terracotta Warriors Museum"
        },
        category: "historical",
        categoryName: {
            zh: "历史古迹",
            en: "Historical"
        },
        description: {
            zh: "世界第八大奇迹，秦始皇陵墓的陪葬坑，展示了数千个真人大小的陶俑，是了解秦朝历史的重要遗址。",
            en: "The Eighth Wonder of the World, the burial pits of Emperor Qin Shi Huang's mausoleum, featuring thousands of life-sized terracotta warriors, a crucial site for understanding Qin Dynasty history."
        },
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        price: {
            zh: "¥120",
            en: "$17"
        },
        address: {
            zh: "陕西省西安市临潼区秦陵北路",
            en: "Qinling North Road, Lintong District, Xi'an, Shaanxi"
        },
        phone: "+86 29 8139 9001",
        website: "www.bmy.com.cn",
        openingHours: {
            zh: "08:30-17:30",
            en: "08:30-17:30"
        },
        bestTime: {
            zh: "春秋季节",
            en: "Spring and Autumn"
        },
        tips: {
            zh: "建议提前网上预约，避开节假日高峰",
            en: "Book online in advance, avoid holiday peaks"
        }
    },
    {
        id: 2,
        name: {
            zh: "西安城墙",
            en: "Xi'an City Wall"
        },
        category: "historical",
        categoryName: {
            zh: "历史古迹",
            en: "Historical"
        },
        description: {
            zh: "中国现存规模最大、保存最完整的古代城垣建筑，全长13.7公里，是西安的标志性建筑。",
            en: "The largest and best-preserved ancient city wall in China, spanning 13.7 kilometers, a landmark of Xi'an."
        },
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        price: {
            zh: "¥54",
            en: "$8"
        },
        address: {
            zh: "陕西省西安市碑林区南门",
            en: "South Gate, Beilin District, Xi'an, Shaanxi"
        },
        phone: "+86 29 8727 2776",
        website: "www.xacitywall.com",
        openingHours: {
            zh: "08:00-22:00",
            en: "08:00-22:00"
        },
        bestTime: {
            zh: "傍晚时分",
            en: "Evening hours"
        },
        tips: {
            zh: "可以骑自行车环城，体验不一样的视角",
            en: "Rent a bicycle to cycle around the wall for a unique perspective"
        }
    },
    {
        id: 3,
        name: {
            zh: "大雁塔",
            en: "Giant Wild Goose Pagoda"
        },
        category: "cultural",
        categoryName: {
            zh: "文化景点",
            en: "Cultural"
        },
        description: {
            zh: "唐代著名佛塔，玄奘法师为保存从印度取回的佛经而建，是佛教文化的象征。",
            en: "Famous Tang Dynasty pagoda built by Master Xuanzang to preserve Buddhist scriptures from India, a symbol of Buddhist culture."
        },
        image: "https://images.unsplash.com/photo-1504674900240-9a9049b7d8ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        price: {
            zh: "¥50",
            en: "$7"
        },
        address: {
            zh: "陕西省西安市雁塔区雁塔南路",
            en: "Yanta South Road, Yanta District, Xi'an, Shaanxi"
        },
        phone: "+86 29 8552 7955",
        website: "www.dayanta.com",
        openingHours: {
            zh: "08:00-17:30",
            en: "08:00-17:30"
        },
        bestTime: {
            zh: "傍晚看音乐喷泉",
            en: "Evening for music fountain"
        },
        tips: {
            zh: "晚上有音乐喷泉表演，非常壮观",
            en: "Evening music fountain show is spectacular"
        }
    },
    {
        id: 4,
        name: {
            zh: "华清宫",
            en: "Huaqing Palace"
        },
        category: "historical",
        categoryName: {
            zh: "历史古迹",
            en: "Historical"
        },
        description: {
            zh: "唐代皇家园林，以温泉闻名，是唐玄宗与杨贵妃的爱情故事发生地。",
            en: "Tang Dynasty royal garden famous for hot springs, where the love story of Emperor Xuanzong and Yang Guifei took place."
        },
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        price: {
            zh: "¥120",
            en: "$17"
        },
        address: {
            zh: "陕西省西安市临潼区华清路",
            en: "Huaqing Road, Lintong District, Xi'an, Shaanxi"
        },
        phone: "+86 29 8381 2003",
        website: "www.huaqing.com",
        openingHours: {
            zh: "07:00-19:00",
            en: "07:00-19:00"
        },
        bestTime: {
            zh: "春秋季节",
            en: "Spring and Autumn"
        },
        tips: {
            zh: "可以体验温泉浴，感受古代皇家生活",
            en: "Experience hot spring baths, feel ancient royal life"
        }
    },
    {
        id: 5,
        name: {
            zh: "回民街",
            en: "Muslim Quarter"
        },
        category: "cultural",
        categoryName: {
            zh: "文化景点",
            en: "Cultural"
        },
        description: {
            zh: "西安著名的美食文化街区，汇集了各种清真美食和传统小吃，是体验西安美食文化的最佳地点。",
            en: "Famous food culture district in Xi'an, gathering various halal foods and traditional snacks, the best place to experience Xi'an's food culture."
        },
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        price: {
            zh: "免费",
            en: "Free"
        },
        address: {
            zh: "陕西省西安市莲湖区北院门",
            en: "Beiyuanmen, Lianhu District, Xi'an, Shaanxi"
        },
        phone: "+86 29 8721 2345",
        website: "www.huiminjie.com",
        openingHours: {
            zh: "全天开放",
            en: "24/7"
        },
        bestTime: {
            zh: "傍晚和晚上",
            en: "Evening and night"
        },
        tips: {
            zh: "建议空腹前往，品尝各种特色小吃",
            en: "Go on an empty stomach to try various specialty snacks"
        }
    },
    {
        id: 6,
        name: {
            zh: "华山",
            en: "Mount Hua"
        },
        category: "nature",
        categoryName: {
            zh: "自然风光",
            en: "Nature"
        },
        description: {
            zh: "五岳之一，以险峻著称，有'奇险天下第一山'的美誉，是登山爱好者的天堂。",
            en: "One of the Five Great Mountains, famous for its steepness, known as 'the most dangerous mountain in the world', a paradise for hikers."
        },
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        price: {
            zh: "¥180",
            en: "$26"
        },
        address: {
            zh: "陕西省华阴市华山镇",
            en: "Huashan Town, Huayin City, Shaanxi"
        },
        phone: "+86 913 436 1666",
        website: "www.huashan.com",
        openingHours: {
            zh: "全天开放",
            en: "24/7"
        },
        bestTime: {
            zh: "春秋季节",
            en: "Spring and Autumn"
        },
        tips: {
            zh: "建议乘坐索道上山，徒步下山，注意安全",
            en: "Take cable car up, hike down, pay attention to safety"
        }
    }
];

// 当前语言状态
let currentLanguage = 'zh';

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化应用
function initializeApp() {
    loadAttractions();
    setupEventListeners();
    setupScrollAnimations();
    setupMobileMenu();
}

// 加载景点数据
function loadAttractions(filter = 'all') {
    const grid = document.getElementById('attractionsGrid');
    grid.innerHTML = '';

    const filteredAttractions = filter === 'all' 
        ? attractionsData 
        : attractionsData.filter(attraction => attraction.category === filter);

    filteredAttractions.forEach(attraction => {
        const card = createAttractionCard(attraction);
        grid.appendChild(card);
    });
}

// 创建景点卡片
function createAttractionCard(attraction) {
    const card = document.createElement('div');
    card.className = 'attraction-card fade-in';
    card.setAttribute('data-category', attraction.category);
    
    const stars = '★'.repeat(Math.floor(attraction.rating)) + '☆'.repeat(5 - Math.floor(attraction.rating));
    
    card.innerHTML = `
        <div class="attraction-image">
            <img src="${attraction.image}" alt="${attraction.name[currentLanguage]}">
        </div>
        <div class="attraction-content">
            <h3 class="attraction-title">${attraction.name[currentLanguage]}</h3>
            <span class="attraction-category">${attraction.categoryName[currentLanguage]}</span>
            <p class="attraction-description">${attraction.description[currentLanguage]}</p>
            <div class="attraction-info">
                <div class="attraction-rating">
                    <span class="stars">${stars}</span>
                    <span>${attraction.rating}</span>
                </div>
                <div class="attraction-price">${attraction.price[currentLanguage]}</div>
            </div>
        </div>
    `;

    // 添加点击事件
    card.addEventListener('click', () => {
        showAttractionModal(attraction);
    });

    return card;
}

// 显示景点详情模态框
function showAttractionModal(attraction) {
    const modal = document.getElementById('attractionModal');
    const modalContent = document.getElementById('modalContent');
    
    const stars = '★'.repeat(Math.floor(attraction.rating)) + '☆'.repeat(5 - Math.floor(attraction.rating));
    
    modalContent.innerHTML = `
        <img src="${attraction.image}" alt="${attraction.name[currentLanguage]}" class="modal-attraction-image">
        <h2 class="modal-attraction-title">${attraction.name[currentLanguage]}</h2>
        <span class="modal-attraction-category">${attraction.categoryName[currentLanguage]}</span>
        <p class="modal-attraction-description">${attraction.description[currentLanguage]}</p>
        
        <div class="modal-attraction-details">
            <div class="detail-item">
                <span class="detail-label">${currentLanguage === 'zh' ? '地址' : 'Address'}:</span>
                <span class="detail-value">${attraction.address[currentLanguage]}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">${currentLanguage === 'zh' ? '电话' : 'Phone'}:</span>
                <span class="detail-value">${attraction.phone}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">${currentLanguage === 'zh' ? '网站' : 'Website'}:</span>
                <span class="detail-value">${attraction.website}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">${currentLanguage === 'zh' ? '开放时间' : 'Opening Hours'}:</span>
                <span class="detail-value">${attraction.openingHours[currentLanguage]}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">${currentLanguage === 'zh' ? '最佳游览时间' : 'Best Time'}:</span>
                <span class="detail-value">${attraction.bestTime[currentLanguage]}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">${currentLanguage === 'zh' ? '小贴士' : 'Tips'}:</span>
                <span class="detail-value">${attraction.tips[currentLanguage]}</span>
            </div>
        </div>
        
        <div class="modal-attraction-actions">
            <a href="tel:${attraction.phone}" class="action-btn primary">
                <i class="fas fa-phone"></i> ${currentLanguage === 'zh' ? '拨打电话' : 'Call'}
            </a>
            <a href="https://${attraction.website}" target="_blank" class="action-btn secondary">
                <i class="fas fa-globe"></i> ${currentLanguage === 'zh' ? '访问网站' : 'Visit Website'}
            </a>
        </div>
    `;
    
    modal.style.display = 'block';
}

// 设置事件监听器
function setupEventListeners() {
    // 筛选按钮
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有活动状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前活动状态
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            loadAttractions(filter);
        });
    });

    // 模态框关闭
    const modal = document.getElementById('attractionModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 联系表单
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContactForm);

    // 平滑滚动
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// 语言切换功能
function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    updateLanguageUI();
    updateAllText();
    loadAttractions(); // 重新加载景点以更新语言
}

// 更新语言UI
function updateLanguageUI() {
    const langText = document.getElementById('lang-text');
    langText.textContent = currentLanguage === 'zh' ? 'EN' : '中';
}

// 更新所有文本
function updateAllText() {
    const elements = document.querySelectorAll('[data-zh][data-en]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });
}

// 设置滚动动画
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// 设置移动端菜单
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击菜单项后关闭菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// 处理联系表单
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // 这里可以添加表单验证和提交逻辑
    console.log('Form submitted:', { name, email, message });
    
    // 显示成功消息
    alert(currentLanguage === 'zh' ? '消息已发送！我们会尽快回复您。' : 'Message sent! We will reply to you soon.');
    
    // 重置表单
    e.target.reset();
}

// 搜索功能
function searchAttractions(query) {
    const filteredAttractions = attractionsData.filter(attraction => 
        attraction.name[currentLanguage].toLowerCase().includes(query.toLowerCase()) ||
        attraction.description[currentLanguage].toLowerCase().includes(query.toLowerCase())
    );
    
    loadAttractionsFromArray(filteredAttractions);
}

// 从数组加载景点
function loadAttractionsFromArray(attractions) {
    const grid = document.getElementById('attractionsGrid');
    grid.innerHTML = '';

    attractions.forEach(attraction => {
        const card = createAttractionCard(attraction);
        grid.appendChild(card);
    });
}

// 获取景点详情
function getAttractionDetails(id) {
    return attractionsData.find(attraction => attraction.id === id);
}

// 格式化价格
function formatPrice(price, currency = 'CNY') {
    if (currency === 'CNY') {
        return `¥${price}`;
    } else if (currency === 'USD') {
        return `$${price}`;
    }
    return price;
}

// 格式化评分
function formatRating(rating) {
    return rating.toFixed(1);
}

// 添加景点到收藏夹
function addToFavorites(attractionId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.includes(attractionId)) {
        favorites.push(attractionId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showNotification(currentLanguage === 'zh' ? '已添加到收藏夹' : 'Added to favorites');
    }
}

// 显示通知
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #d4af37;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style); 