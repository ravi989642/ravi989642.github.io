<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🏆 Awards & Honors · Railway Exam Vault</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 1.5rem;
            min-height: 100vh;
        }
        .container { max-width: 1300px; margin: 0 auto; }
        
        /* Header */
        .hero {
            background: white;
            border-radius: 1.5rem;
            padding: 1.8rem 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 20px 35px -12px rgba(0,0,0,0.2);
            text-align: center;
        }
        .hero h1 {
            font-size: 2rem;
            color: #1e293b;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
        }
        .badge {
            background: linear-gradient(135deg, #f59e0b, #dc2626);
            color: white;
            padding: 4px 16px;
            border-radius: 40px;
            font-size: 0.9rem;
        }
        .stats {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 1rem;
            flex-wrap: wrap;
        }
        .stat {
            background: #f1f5f9;
            padding: 6px 18px;
            border-radius: 40px;
            font-weight: 600;
            color: #475569;
        }
        
        /* Filters */
        .filter-bar {
            background: white;
            border-radius: 60px;
            padding: 0.8rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
            margin-bottom: 2rem;
            justify-content: center;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .filter-btn {
            background: #f1f5f9;
            border: none;
            padding: 0.6rem 1.2rem;
            border-radius: 40px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            font-family: inherit;
        }
        .filter-btn:hover { background: #e2e8f0; transform: translateY(-2px); }
        .filter-btn.active {
            background: #1e293b;
            color: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        
        /* Cards Grid */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 1.5rem;
        }
        .card {
            background: white;
            border-radius: 1.2rem;
            overflow: hidden;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 30px -12px rgba(0,0,0,0.2);
        }
        .card-header {
            background: linear-gradient(135deg, #1e293b, #334155);
            color: white;
            padding: 1rem 1.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
        }
        .q-id {
            background: #f59e0b;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: bold;
        }
        .award-tag {
            background: rgba(255,255,255,0.2);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
        }
        .card-body {
            padding: 1.2rem;
        }
        .question-text {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #0f172a;
            line-height: 1.4;
        }
        .winner-box {
            background: linear-gradient(135deg, #fef3c7, #fde68a);
            padding: 0.8rem;
            border-radius: 0.8rem;
            margin: 0.8rem 0;
        }
        .winner {
            font-size: 1.2rem;
            font-weight: bold;
            color: #92400e;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 6px 0;
            border-bottom: 1px solid #e2e8f0;
            font-size: 0.85rem;
        }
        .label {
            font-weight: 700;
            color: #475569;
        }
        .explanation {
            margin-top: 0.8rem;
            padding: 0.8rem;
            background: #f1f5f9;
            border-radius: 0.6rem;
            font-size: 0.8rem;
            color: #334155;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 0.8rem;
        }
        .tag {
            background: #e2e8f0;
            padding: 2px 10px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 600;
        }
        .empty-state {
            text-align: center;
            padding: 3rem;
            background: white;
            border-radius: 1.5rem;
            color: #64748b;
        }
        footer {
            text-align: center;
            margin-top: 2rem;
            color: white;
            font-size: 0.8rem;
        }
        @media (max-width: 640px) {
            body { padding: 1rem; }
            .cards-grid { grid-template-columns: 1fr; }
            .filter-btn { padding: 0.4rem 1rem; font-size: 0.75rem; }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="hero">
        <h1>
            🏆 Awards & Honors
            <span class="badge">Railway Exam Vault</span>
        </h1>
        <div class="stats">
            <div class="stat">📖 Total: <span id="totalCount">0</span></div>
            <div class="stat">🎯 10+ Categories</div>
            <div class="stat">⭐ Nobel | Padma | Bharat Ratna | Sports</div>
        </div>
    </div>

    <div class="filter-bar" id="filterContainer"></div>
    <div id="cardsContainer" class="cards-grid">
        <div class="empty-state">📌 Loading 149+ previous year questions...</div>
    </div>
    <footer>⚡ Based on RPF SI, RRB NTPC, ALP, JE PYQs | 🏆 पिछली परीक्षाओं पर आधारित</footer>
</div>

<script src="honors-data.js"></script>
<script>
    (function() {
        if (typeof honorsData === 'undefined') {
            document.getElementById('cardsContainer').innerHTML = '<div class="empty-state">❌ honors-data.js not found. Please ensure the file is in the same directory.</div>';
            return;
        }

        // Get unique categories
        const allQuestions = honorsData;
        const categorySet = new Set();
        allQuestions.forEach(q => {
            if (q.category) categorySet.add(q.category);
        });
        let categories = ['✨ All', ...Array.from(categorySet).sort()];
        let activeFilter = '✨ All';

        // Filter container
        const filterContainer = document.getElementById('filterContainer');
        function renderFilters() {
            filterContainer.innerHTML = '';
            categories.forEach(cat => {
                const btn = document.createElement('button');
                btn.className = 'filter-btn';
                if (cat === activeFilter) btn.classList.add('active');
                btn.textContent = cat;
                btn.addEventListener('click', () => {
                    activeFilter = cat;
                    renderFilters();
                    renderCards();
                });
                filterContainer.appendChild(btn);
            });
        }

        // Cards container
        function renderCards() {
            const container = document.getElementById('cardsContainer');
            let filtered = allQuestions;
            if (activeFilter !== '✨ All') {
                filtered = filtered.filter(q => q.category === activeFilter);
            }
            
            document.getElementById('totalCount').innerText = filtered.length;
            
            if (filtered.length === 0) {
                container.innerHTML = '<div class="empty-state">🧐 No questions match this category. Try another filter!</div>';
                return;
            }
            
            let html = '';
            filtered.forEach(q => {
                html += `
                    <div class="card">
                        <div class="card-header">
                            <span class="q-id">📌 Q${q.id}</span>
                            <span class="award-tag">🏆 ${q.award}</span>
                        </div>
                        <div class="card-body">
                            <div class="question-text">📖 ${q.text}</div>
                            <div class="winner-box">
                                <div style="font-size:0.7rem; color:#78350f;">🏅 विजेता / WINNER</div>
                                <div class="winner">${q.winner}</div>
                            </div>
                            <div class="detail-row">
                                <span class="label">📅 वर्ष / YEAR:</span>
                                <span>${q.year || '—'}</span>
                            </div>
                            <div class="detail-row">
                                <span class="label">🏷️ श्रेणी / CATEGORY:</span>
                                <span>${q.category || '—'}</span>
                            </div>
                            <div class="detail-row">
                                <span class="label">✅ सही उत्तर:</span>
                                <span style="color:#065f46; font-weight:bold;">${q.answer}</span>
                            </div>
                            ${q.explanation ? `<div class="explanation">📖 ${q.explanation}</div>` : ''}
                            <div class="tags">
                                ${q.tags ? q.tags.map(t => `<span class="tag">#${t}</span>`).join('') : ''}
                            </div>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
        }
        
        renderFilters();
        renderCards();
    })();
</script>
</body>
</html>
