$(document).ready(function () {

    // 페이지 라우팅: 메뉴의 data-page 값과 렌더링 함수를 연결합니다.
    const pageRenderers = {
        dashboard: showDashboard,
        profile: showProfile,
        career: showCareer,
        testcases: showTestCases,
        defects: showDefects,
        automation: showAutomation,
        contact: showContact
    };

    $(document).on("click", ".nav-item", function (event) {
        event.preventDefault();

        const page = $(this).data("page");
        const renderPage = pageRenderers[page];

        // 정의되지 않은 페이지는 활성 메뉴를 바꾸지 않습니다.
        if (typeof renderPage !== "function") return;

        $(".nav-item").removeClass("active").attr("aria-current", null);
        $(this).addClass("active").attr("aria-current", "page");

        closeProjectModal();
        renderPage();
        closeMobileMenu();
    });

    // Dashboard
    function showDashboard() {

        $("#content").html(`

                <!-- =========================
                     Hero
                ========================== -->
                <section class="hero">

                    <div>

                        <span class="eyebrow">
                            QA ENGINEER
                        </span>

                        <h1>
                            박준영
                        </h1>

                        <p class="hero-description">
                            요구사항 분석부터 Test Case 설계, 기능 테스트, 통합 테스트, 이슈 관리, 릴리즈 검증까지 QA 전 과정을 수행한 QA Engineer입니다.
                        </p>

                    </div>

                </section>


                <!-- =========================
                     Statistics
                ========================== -->
                <section class="stats">

                    <div class="stat-card">

                        <div class="stat-label">
                            EXPERIENCE
                        </div>

                        <div class="stat-value">
                            5<span>+</span>
                        </div>

                        <div class="stat-description">
                            QA 경력
                        </div>

                    </div>


                    <div class="stat-card">

                        <div class="stat-label">
                            TEST CASE
                        </div>

                        <div class="stat-value">
                            5,000<span>+</span>
                        </div>

                        <div class="stat-description">
                            TC 설계 및 수행
                        </div>

                    </div>


                    <div class="stat-card">

                        <div class="stat-label">
                            DEFECT
                        </div>

                        <div class="stat-value">
                            1,000<span>+</span>
                        </div>

                        <div class="stat-description">
                            등록 결함 및 관리
                        </div>

                    </div>

                </section>


                <!-- =========================
                     Projects
                ========================== -->
                <section class="section">

                    <div class="section-header">

                        <div>
                            <span class="section-label">
                                PROJECTS
                            </span>

                            <h2>
                                Project Experience
                            </h2>
                        </div>

                    </div>


                    <div class="project-grid">

                        <!-- Project 1 -->
                        <article class="project-card" data-project="cluster">

                            <div class="project-top">

                                <span class="project-type">
                                    AUTOMOTIVE EMBEDDED QA
                                </span>

                                <span class="project-number">
                                    01
                                </span>

                            </div>

                            <h3>
                                Hyundai Cluster
                            </h3>

                            <p>
                                Cluster setup 단계에서 테스트 환경 구축 및 품질 검증
                            </p>

                            <div class="project-tags">
                                <span>Cluster</span>
                                <span>CANoe</span>
                                <span>Jira</span>
                            </div>

                            <div class="project-footer">
                                <span>회사 : 인피닉</span>
                                <a href="#" class="project-more" data-project="cluster"> 상세보기 →</a>
                            </div>

                        </article>


                        <!-- Project 2 -->
                        <article class="project-card" data-project="volkswagen">

                            <div class="project-top">

                                <span class="project-type">
                                    AUTOMOTIVE EMBEDDED QA
                                </span>

                                <span class="project-number">
                                    02
                                </span>

                            </div>

                            <h3>
                                Volkswagen Cluster
                            </h3>

                            <p>
                                Cluster setup 단계에서
                                테스트 환경 구축 및 품질 검증
                            </p>

                            <div class="project-tags">
                                <span>Cluster</span>
                                <span>CANoe</span>
                                <span>Jira</span>
                            </div>

                            <div class="project-footer">
                                <span>회사 : 큐앤피플</span>
                                <a href="#" class="project-more" data-project="volkswagen"> 상세보기 →</a>
                            </div>

                        </article>


                        <!-- Project 3 -->
                        <article class="project-card" data-project="avn">

                            <div class="project-top">

                                <span class="project-type">
                                    AUTOMOTIVE EMBEDDED QA
                                </span>

                                <span class="project-number">
                                    03
                                </span>

                            </div>

                            <h3>
                                Hyundai AVN
                            </h3>

                            <p>
                                AVN Setup 단계에서 
                                테스트 환경 구축 및 품질 검증
                            </p>

                            <div class="project-tags">
                                <span>LG AI Tool</span>
                                <span>Jira</span>
                                <span>AVN</span>
                            </div>

                            <div class="project-footer">
                                <span>회사 : 큐앤피플</span>
                                <a href="#" class="project-more" data-project="avn"> 상세보기 →</a>
                            </div>

                        </article>

                        <!-- Project 4 -->
                        <article class="project-card" data-project="saucedemo">

                            <div class="project-top">

                                <span class="project-type">
                                    WEB QA · 개인 프로젝트
                                </span>

                                <span class="project-number">
                                    04
                                </span>

                            </div>

                            <h3>
                                SauceDemo <span class="web-qa">(Web QA Automation)</span>
                            </h3>

                            <p>
                                로그인, 상품 정렬, 장바구니 등 핵심 사용자 시나리오를 설계하고, Selenium을 활용해 정상 및 예외 상황을 자동화 검증

                            <div class="project-tags">
                                <span>Python</span>
                                <span>Selenium</span>
                                <span>VS Code</span>
                            </div>

                            <div class="project-footer">
                                <a href="#" class="project-more" data-project="saucedemo"> 상세보기 →</a>
                            </div>

                        </article>

                    </div>

                </section>


                <!-- =========================
                     QA Process
                ========================== -->
                <section class="section">

                    <div class="section-header">

                        <div>
                            <span class="section-label">
                                QA PROCESS
                            </span>

                            <h2>
                                How I Work
                            </h2>
                        </div>

                    </div>


                    <div class="process">

                        <div class="process-item">
                            <span class="process-number">01</span>
                            <strong>Requirement</strong>
                            <small>요구사항 분석</small>
                        </div>

                        <span class="process-arrow">→</span>

                        <div class="process-item">
                            <span class="process-number">02</span>
                            <strong>Test Case</strong>
                            <small>TC 설계</small>
                        </div>

                        <span class="process-arrow">→</span>

                        <div class="process-item">
                            <span class="process-number">03</span>
                            <strong>Test</strong>
                            <small>테스트 수행</small>
                        </div>

                        <span class="process-arrow">→</span>

                        <div class="process-item">
                            <span class="process-number">04</span>
                            <strong>Defect</strong>
                            <small>결함 관리</small>
                        </div>

                        <span class="process-arrow">→</span>

                        <div class="process-item">
                            <span class="process-number">05</span>
                            <strong>Improve</strong>
                            <small>프로세스 개선</small>
                        </div>

                    </div>

                </section>

            </section>
            `);
        }

    // Profile
    function showProfile() {

        $("#content").html(`

            <section class="page-header">

                <span class="eyebrow">
                    PROFILE
                </span>

                <h1>
                    About Me
                </h1>

                <div class="profile-intro">

                    <img src="images/JYP.jpg" alt="박준영 프로필 사진" class="JYP">

                    <p>
                        <strong>요구사항 분석</strong>부터 <strong>Test Case 설계, 기능, 통합 테스트, 이슈 관리,
                        릴리즈 검증</strong>까지 QA 전 과정을 수행한 <b>QA Engineer</b>입니다.
                        자동차 IVI/Cluster 프로젝트에서 <strong>총 200회 이상의 SW Release 검증,
                        1,000건 이상의 이슈 관리, 다국어 및 복합 연동 기능 검증을 수행</strong>하며
                        제품 품질 향상에 기여했습니다.
                        <strong>체크리스트, Version Matrix, OTA 업데이트 가이드 등 검증 프로세스를
                        개선하고, 자동화팀과 협업하여 테스트 자동화 확대</strong>를 지원했습니다.
                        꼼꼼한 검증과 지속적인 개선을 통해 제품의 품질을 높이는 QA를 지향합니다.
                        앞으로는 App/Web 환경에서도 요구사항 분석부터 품질 개선까지
                        주도하는 <b>QA Engineer</b>로 성장하고자 합니다.
                    </p>

                </div>

            </section>

            <section class="profile-grid">

                <div class="profile-card">

                    <span class="section-label">
                        QA EXPERIENCE
                    </span>

                    <h2>
                        주요 QA 성과
                    </h2>

                    <div class="qa-achievement-list">

                        <div class="qa-achievement-item">
                            <span class="qa-achievement-label">
                                - 요구사항 분석 및 Test Case 설계 (5,000+)
                            </span>
                        </div>

                        <div class="qa-achievement-item">
                            <span class="qa-achievement-label">
                                - 기능·회귀·통합 테스트를 통한 품질 검증
                            </span>
                        </div>

                        <div class="qa-achievement-item">
                            <span class="qa-achievement-label">
                                - SW Release 검증 및 회귀 테스트 (200+)
                            </span>
                        </div>

                        <div class="qa-achievement-item">
                            <span class="qa-achievement-label">
                                - 결함 등록·추적 및 수정 결과 검증 (1,000+)
                            </span>
                        </div>

                        <div class="qa-achievement-item">
                            <span class="qa-achievement-label">
                                - 다국어(Localization) 및 UI/UX 품질 검증
                            </span>
                        </div>

                        <div class="qa-achievement-item">
                            <span class="qa-achievement-label">
                                - 테스트 프로세스 개선 및 자동화 효율화
                            </span>
                        </div>

                    </div>
                </div>

                <div class="profile-card">

                    <span class="section-label">
                        CORE SKILLS
                    </span>

                    <div class="skill-group">

                        <h3>테스트 설계 및 수행</h3>

                        <div class="skill-list">
                            <span>요구사항 분석</span>
                            <span>테스트 케이스 설계</span>
                            <span>테스트 수행 및 검증</span>
                            <span>회귀 테스트</span>
                            <span>통합 테스트</span>
                        </div>

                    </div>

                    <div class="skill-group">

                        <h3>품질 및 결함 관리</h3>

                        <div class="skill-list">
                            <span>결함 분석 및 관리</span>
                            <span>결함 재현 및 추적</span>
                            <span>SW 릴리스 검증</span>
                            <span>테스트 프로세스 개선</span>
                        </div>

                    </div>

                    <div class="skill-group">

                        <h3>자동화 및 테스트 도구</h3>

                        <div class="skill-list">
                            <span>Python</span>
                            <span>Selenium</span>
                            <span>Jira</span>
                            <span>CANoe</span>
                        </div>

                    </div>

                </div>

            </section>

        `);

    }

    // Career
    function showCareer() {

        $("#content").html(`

            <section class="page-header">

                <span class="eyebrow">
                    CAREER
                </span>

                <h1>
                    경력사항
                </h1>

                <p>
                    Automotive Embedded QA 경험을 기반으로
                    Web QA와 Test Automation 영역으로 확장하고 있습니다.
                </p>

            </section>

            <section id="career" class="career-section">

                <div class="career-list">

                    <!-- 큐앤피플 -->
                    <div class="career-item">

                        <div class="career-content">

                            <h5>큐앤피플 (QnPeople) | 2022.12 ~ 2026.06</h5>

                            <!-- Volkswagen Cluster -->
                            <div class="career-project">

                                <span class="project-label">PROJECT 01</span>
                                <h4>Volkswagen Cluster</h4>

                                <ul>
                                    <li>Cluster 테스트 환경 및 검증 체계 구축</li>
                                    <li>Media 및 Assistance 기능 요구사항 분석, Test Case 설계·작성·수정</li>
                                    <li>기능 검증 및 결함 등록·추적, 수정 버전 회귀 테스트 수행</li>
                                    <li>G-Meter 신규 기능 Test Case 설계 및 기능 검증</li>
                                    <li>CANoe, RBS Tool을 활용한 테스트 자동화 협업</li>
                                    <li>VP/GP 업데이트 가이드 제작 및 배포</li>
                                    <li>Version Matrix, 검증 체크리스트, 검증 환경 표준화 문서 작성</li>
                                    <li>SW Release 수행 및 버전 관리</li>
                                    <li>Volkswagen 개발팀 및 해외 QA팀과 협업하여 이슈 분석 및 검증</li>
                                </ul>

                            </div>

                            <!-- Hyundai AVN -->
                            <div class="career-project">

                                <span class="project-label">PROJECT 02</span>
                                <h4>Hyundai AVN</h4>

                                <ul>
                                    <li>신규 인력 온보딩, 검증 장비 관리 및 사내 안전교육 운영</li>
                                    <li>요구사항(CodeBeamer/RS) 분석 기반 DTC 및 Dynamic Control Test Case 설계·작성</li>
                                    <li>Jira 기반 결함 등록·추적, CANoe 및 실차 기반 기능 검증, 수정 버전 회귀 테스트 수행</li>
                                    <li>Connected Service 개통 및 OTA 검증 환경 구축, OTA Test Case 설계 및 검증</li>
                                    <li>글로벌 UI/UX 및 다국어(Localization) 검증</li>
                                    <li>고객사 이슈 재현, 원인 분석 및 개발팀 협업</li>
                                    <li>AI Tool(LG VCTM)을 활용한 Test Case 작성 및 검증 항목 보완</li>
                                    <li>OTA 업데이트 가이드 제작 및 검증 프로세스 표준화</li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    <!-- 인피닉 -->
                    <div class="career-item">

                        <div class="career-content">

                            <h5>인피닉 (Infinic) | 2019.10 ~ 2021.04</h5>

                            <div class="career-project">
                                <span class="project-label">PROJECT 01</span>
                                <h4>Hyundai Cluster</h4>

                                <ul>
                                    <li>테스트 환경 구축 및 기능 검증</li>
                                    <li>요구사항(CodeBeamer) 기반 Test Case 설계·작성 및 기능 검증</li>
                                    <li>차량 경고 팝업, 계기판 경고등 등 Cluster 기능 검증</li>
                                    <li>UI/UX 및 사용자 관점 검증</li>
                                    <li>CANoe를 활용한 CAN 통신 및 신호 연동 검증</li>
                                    <li>실차(필드 테스트) 기반 기능 검증</li>
                                    <li>Jira 기반 결함 등록·추적, 수정 버전 회귀 테스트 수행</li>
                                    <li>개발팀 및 자동화팀과 협업하여 테스트 자동화 지원</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
            
            <!-- Certifications -->
            <section id="certifications" class="info-section">

                <div class="section-header">
                    <span class="section-label">CERTIFICATIONS</span>
                </div>

                <div class="info-list">

                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fa-solid fa-award"></i>
                        </div>

                        <div class="info-content">
                            <h3>ISTQB CTFL</h3>
                            <p>Certified Tester Foundation Level</p>
                            <span class="info-description">
                                2025.08 취득
                            </span>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fa-solid fa-car"></i>
                        </div>

                        <div class="info-content">
                            <h3>2종 보통 운전 면허</h3>
                            <p>경찰청 (운전면허시험관리단)</p>
                            <span class="info-description">
                                2015.02 취득
                            </span>
                        </div>
                    </div>

                </div>

            </section>

            <!-- Education -->
            <section id="education" class="info-section">

                <div class="section-header">
                    <span class="section-label">EDUCATION & SELF-STUDY</span>
                </div>

                <div class="info-list">

                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fa-solid fa-laptop-code"></i>
                        </div>

                        <div class="info-content">
                            <h3>SBS아카데미아트학원 구월점</h3>
                            <p>웹 퍼블리싱 과정</p>
                            <span class="info-description">
                                2021년 수료 · HTML5, CSS3,
                                JavaScript, jQuery
                            </span>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fa-solid fa-laptop-code"></i>
                        </div>

                        <div class="info-content">
                            <h3>개인 학습</h3>
                            <p>Python + Selenium 기반 웹 QA 자동화 실습</p>
                            <span class="info-description">
                                SauceDemo를 활용한 테스트 케이스 작성 및 자동화 구현
                            </span>
                        </div>
                    </div>

                </div>

            </section>
            
        `);

    }

    // QA 사이드바

    function showTestCases() {
        $("#content").html(`
            
            <!-- Test Cases Page -->
            <section id="test-cases" class="page-section">

                <!-- Page Header -->
                <div class="page-header">
                    <span class="eyebrow">QA PORTFOLIO / TEST CASES</span>

                    <h1>Test Case Design</h1>

                    <p>
                        요구사항을 분석하고 다양한 사용자 시나리오를 기반으로
                        테스트 케이스를 설계하는 과정을 소개합니다.
                    </p>
                </div>

                <!-- Test Case Overview -->
                <div class="tc-intro">

                    <h2>테스트 케이스란?</h2>

                    <p>
                        소프트웨어의 특정 기능이 요구사항에 맞게 정상적으로
                        동작하는지 검증하기 위해 작성하는 테스트 문서입니다.
                    </p>

                    <p>
                        사용자의 다양한 행동과 예외 상황을 사전에 고려하여
                        테스트 조건, 수행 절차 및 기대 결과를 정의합니다.
                    </p>

                </div>

                <!-- Test Case Design -->
                <div class="tc-design">

                    <h2>테스트 케이스 설계란?</h2>

                    <p>
                        테스트할 기능을 기준으로 다양한 상황을 상정하여
                        <span class="tc-highlight">
                            어떤 상황에서 어떤 결과가 나와야 하는지
                        </span>
                        미리 정의하는 작업입니다.
                    </p>

                </div>

                <!-- Test Case Structure -->
                <div class="tc-section">

                    <h2>테스트 케이스 구성 항목</h2>

                    <p class="tc-description">
                        테스트 케이스를 작성할 때 사용하는 주요 항목과 각 항목의 역할입니다.
                    </p>

                    <div class="tc-table-wrap">

                        <table class="tc-table structure-table">

                            <thead>
                                <tr>
                                    <th>항목</th>
                                    <th>TC ID</th>
                                    <th>테스트 목적</th>
                                    <th>사전 조건</th>
                                    <th>테스트 입력값</th>
                                    <th>테스트 절차</th>
                                    <th>기대 결과</th>
                                    <th>실제 결과</th>
                                    <th>상태</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th>영문 명칭</th>
                                    <td>TC ID</td>
                                    <td>Purpose</td>
                                    <td>Preconditions</td>
                                    <td>Test Data</td>
                                    <td>Test Steps</td>
                                    <td>Expected Result</td>
                                    <td>Actual Result</td>
                                    <td>Result</td>
                                </tr>

                                <tr>
                                    <th>설명</th>
                                    <td>
                                        테스트 케이스를 구분하기 위한
                                        고유 식별 번호
                                        <br><br>
                                        (예: TC-LOGIN-001)
                                    </td>

                                    <td>
                                        어떤 기능을 검증하는지
                                        명확하게 정의
                                    </td>

                                    <td>
                                        테스트 실행 전에 필요한
                                        환경 및 조건
                                    </td>

                                    <td>
                                        테스트에 사용하는
                                        계정 및 입력 데이터
                                    </td>

                                    <td>
                                        테스트 수행 방법을
                                        단계별로 설명
                                    </td>

                                    <td>
                                        정상적으로 동작할 때
                                        예상되는 결과
                                    </td>

                                    <td>
                                        실제 테스트 수행 후
                                        확인된 결과
                                    </td>

                                    <td>
                                        테스트 결과에 따른
                                        Pass / Fail 여부
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                </div>

                <!-- Test Case Example -->
                <div class="tc-section example-section">

                    <h2>테스트 케이스 작성 예시</h2>

                    <p class="tc-description">
                        로그인 기능을 대상으로 작성한 테스트 케이스 예시입니다.
                    </p>

                    <div class="tc-table-wrap">

                        <table class="tc-table example-table">

                            <thead>
                                <tr>
                                    <th>항목</th>
                                    <th>TC ID</th>
                                    <th>Purpose</th>
                                    <th>Preconditions</th>
                                    <th>Test Data</th>
                                    <th>Test Steps</th>
                                    <th>Expected Result</th>
                                    <th>Actual Result</th>
                                    <th>Result</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th>내용</th>

                                    <td>TC-LOGIN-001</td>

                                    <td>
                                        올바른 이메일과 비밀번호로
                                        로그인 가능한지 확인
                                    </td>

                                    <td>
                                        가입된 계정이 존재하고
                                        로그인 페이지에 접근 가능한 상태
                                    </td>

                                    <td>
                                        ID: test@example.com
                                        <br><br>
                                        PW: ValidPassword123!
                                    </td>

                                    <td>
                                        ① 로그인 페이지 접속
                                        <br><br>
                                        ② 이메일 입력
                                        <br><br>
                                        ③ 비밀번호 입력
                                        <br><br>
                                        ④ 로그인 버튼 클릭
                                    </td>

                                    <td>
                                        메인 화면으로 이동하고
                                        로그인한 사용자 정보가 표시됨
                                    </td>

                                    <td>
                                        테스트 실행 후
                                        실제 확인 결과 기록
                                    </td>

                                    <td>
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    <p class="tc-note">
                        ※ 위 내용은 테스트 케이스 작성 형식을 설명하기 위한 예시이며,
                        실제 실행 결과는 검증 후 기록합니다.
                    </p>

                </div>

            </section>

        `);
        
    }

    function showDefects() {
        $("#content").html(`
            <!-- Defects Page -->
            <section id="defects" class="page-section">

                <!-- 페이지 제목 -->
                <div class="page-header">
                    <span class="eyebrow">QA PORTFOLIO / DEFECTS</span>
                    <h1>Defect Management</h1>
                    <p>
                        결함 발견부터 분석, 등록, 수정 검증까지
                        QA 프로세스와 실무 경험을 소개합니다.
                    </p>
                </div>

                <section class="section">

                    <div class="section-header">

                        <div>
                            <span class="section-label">
                                결함 관리 프로세스
                            </span>

                            <h2>
                                How I Work
                            </h2>
                        </div>

                    </div>

                    <div class="process">

                        <div class="process-item">
                            <span class="process-number">01</span>
                            <strong>Requirement Analysis</strong>
                            <small>요구사항 분석 및 검증 기준 확인</small>
                        </div>

                        <span class="process-arrow">→</span>

                        <div class="process-item">
                            <span class="process-number">02</span>
                            <strong>Test Execution</strong>
                            <small>테스트 수행 및 결함 발견</small>
                        </div>

                        <span class="process-arrow">→</span>

                        <div class="process-item">
                            <span class="process-number">03</span>
                            <strong>Defect Reporting</strong>
                            <small>재현 조건 및 기대 결과를 포함한 결함 등록</small>
                        </div>

                        <span class="process-arrow">→</span>

                        <div class="process-item">
                            <span class="process-number">04</span>
                            <strong>Triage & Assignment</strong>
                            <small>결함 검토 및 담당자 할당</small>
                        </div>

                        <span class="process-arrow">→</span>

                        <div class="process-item">
                            <span class="process-number">05</span>
                            <strong>Defect Fix</strong>
                            <small>개발팀 수정 및 조치</small>
                        </div>

                        <span class="process-arrow">→</span>

                        <div class="process-item">
                            <span class="process-number">06</span>
                            <strong>Retesting & Verification</strong>
                            <small>수정 결과 검증 및 회귀 테스트</small>
                        </div>

                        <span class="process-arrow">→</span>

                        <div class="process-item">
                            <span class="process-number">07</span>
                            <strong>Defect Closure</strong>
                            <small>수정 결과 확인 후 결함 종료</small>
                        </div>

                    </div>

                </section>

                <!-- 결함 통계 -->
                <div class="defect-stats">

                    <div class="stat-card">
                        <span>Jira Issues</span>
                        <h2>1,000+</h2>
                        <p>이슈 등록 및 추적</p>
                    </div>

                    <div class="stat-card">
                        <span>Verified Defects</span>
                        <h2>86.4%</h2>
                        <p>진성 결함률 (Fixed)</p>
                    </div>

                    <div class="stat-card">
                        <span>Critical / Major</span>
                        <h2>30 / 160</h2>
                        <p>약 30건 / 약 160건</p>
                    </div>

                </div>

                <!-- 대표 결함 사례 -->
                <div class="defect-cases">
                    <h2>대표 결함 사례</h2>

                    <article class="defect-card">
                        <span class="severity critical">Critical</span>
                        <h3>Cluster 전원 OFF 현상</h3>
                        <p>
                            계기판 전원이 꺼지는 현상을 발견하고
                            재현 조건을 확인하여 결함을 등록한 사례입니다.
                        </p>
                        <div class="defect-tags">
                            <span>심각도 : P1</span>
                            <span>우선순위 : P1</span>
                            <span>Jira</span>
                        </div>
                    </article>

                    <article class="defect-card">
                        <span class="severity major">Major</span>
                        <h3>Bluetooth 기능 미동작</h3>
                        <p>
                            Popup monitor Up / Down 반복시 Bluetooth 기능 미동작 현상을 발견하고
                            재현 조건을 확인하여 결함을 등록한 사례입니다.
                        </p>
                        <div class="defect-tags">
                            <span>심각도 : P2</span>
                            <span>우선순위 : P1</span>
                            <span>Jira</span>
                        </div>
                    </article>

                    <article class="defect-card">
                        <span class="severity minor">Minor</span>
                        <h3>Station Art 연결 된 휴대폰과 이미지 다른 현상 </h3>
                        <p>
                            Bluetooth 연결 후 음악 재생 시 AVN 과 연결 된 휴대폰 Station Art 이미지 다르게 출력되어
                            재현 조건을 확인하여 결함을 등록한 사례입니다.
                        </p>
                        <div class="defect-tags">
                            <span>심각도 : P3</span>
                            <span>우선순위 : P3</span>
                            <span>Jira</span>
                        </div>
                    </article>

                </div>

            </section>

        `);
    }
    // Automation: SauceDemo 개인 학습 프로젝트 소개
    function showAutomation() {
        $("#content").html(`
            <section id="automation" class="page-section">
                <div class="page-header">
                    <span class="eyebrow">QA PORTFOLIO / AUTOMATION</span>
                    <h1>Test Automation</h1>
                    <p>
                        Python과 Selenium을 활용해 웹 테스트 케이스를 자동화하고,
                        실행 결과와 실패 원인을 기록하는 개인 학습 프로젝트입니다.
                    </p>
                </div>

                <div class="automation-content">
                    <article class="automation-card">
                        <div class="card-heading">
                            <span class="card-label">PERSONAL PROJECT</span>
                            <span class="project-status">Learning Project</span>
                        </div>
                        <h2>SauceDemo Web QA Automation</h2>
                        <p class="project-description">
                            로그인, 상품 정렬, 상세 페이지 이동, 장바구니 등 주요 기능을
                            테스트 케이스로 정의하고 Selenium WebDriver로 검증합니다.
                        </p>
                        <div class="tech-stack">
                            <span>Python</span>
                            <span>Selenium</span>
                            <span>VS Code</span>
                        </div>
                        <div class="project-info-grid">
                            <div>
                                <span class="info-label">TARGET</span>
                                <strong>SauceDemo</strong>
                            </div>
                            <div>
                                <span class="info-label">TEST TYPE</span>
                                <strong>Functional UI Test</strong>
                            </div>
                            <div>
                                <span class="info-label">FOCUS</span>
                                <strong>PASS / FAIL 검증</strong>
                            </div>
                        </div>
                    </article>

                    <section class="automation-section">
                        <div class="section-heading">
                            <div>
                                <span class="card-label">TEST COVERAGE</span>
                                <h2>주요 자동화 테스트</h2>
                            </div>
                        </div>
                        <div class="test-case-list">
                            <div class="test-case-item">
                                <span class="tc-id">TC_001</span>
                                <div class="tc-info"><strong>로그인 성공</strong><p>정상 계정으로 로그인하고 상품 목록 페이지 진입 여부 확인</p></div>
                                <span class="tc-category">Login</span>
                            </div>
                            <div class="test-case-item">
                                <span class="tc-id">TC_002</span>
                                <div class="tc-info"><strong>로그인 실패</strong><p>잘못된 인증 정보 입력 시 오류 메시지 표시 확인</p></div>
                                <span class="tc-category">Negative</span>
                            </div>
                            <div class="test-case-item">
                                <span class="tc-id">TC_003</span>
                                <div class="tc-info"><strong>상품 정렬</strong><p>가격 오름차순 및 내림차순 정렬 결과 확인</p></div>
                                <span class="tc-category">Sorting</span>
                            </div>
                            <div class="test-case-item">
                                <span class="tc-id">TC_004 ~ 009</span>
                                <div class="tc-info"><strong>상품 상세 및 장바구니</strong><p>상세 페이지 이동, 상품 추가·삭제 및 수량 표시 확인</p></div>
                                <span class="tc-category">Cart</span>
                            </div>
                        </div>
                    </section>

                    <section class="automation-section">
                        <div class="section-heading">
                            <div>
                                <span class="card-label">IMPLEMENTATION</span>
                                <h2>자동화 구현 항목</h2>
                            </div>
                        </div>
                        <div class="feature-grid">
                            <article class="feature-card"><span class="feature-number">01</span><h3>브라우저 제어</h3><p>Selenium WebDriver로 브라우저 실행과 사용자 동작을 자동화합니다.</p></article>
                            <article class="feature-card"><span class="feature-number">02</span><h3>명시적 대기</h3><p>WebDriverWait를 사용해 요소가 준비된 후 다음 동작을 수행합니다.</p></article>
                            <article class="feature-card"><span class="feature-number">03</span><h3>결과 검증</h3><p>기대 결과를 assertion으로 확인하고 PASS / FAIL 및 실패 원인을 기록합니다.</p></article>
                        </div>
                    </section>
                </div>
            </section>
        `);
    }

    // OTHER - Contact 
    
    function showContact() {
        $("#content").html(`
            
            <!-- Contact Page -->
            <section id="contact" class="page-section">

                <div class="page-header">
                    <span class="eyebrow">QA PORTFOLIO / CONTACT</span>

                    <h1>Contact Me</h1>

                    <p>
                        새로운 기회와 다양한 협업을 기다립니다.
                        언제든 편하게 연락해 주세요.
                    </p>
                </div>

                <div class="contact-container">

                    <!-- Email -->
                    <div class="contact-card">

                        <div class="contact-icon">
                            <i class="fa-regular fa-envelope"></i>
                        </div>

                        <div class="contact-info">
                            <h3>Email</h3>
                            <p>junyoung96.krap@gmail.com</p>
                        </div>

                        <a href="mailto:본인 이메일 주소">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>

                    </div>

                    <!-- GitHub -->
                    <div class="contact-card">

                        <div class="contact-icon">
                            <i class="fa-brands fa-github"></i>
                        </div>

                        <div class="contact-info">
                            <h3>GitHub</h3>
                            <p>QA Automation & Coding Projects</p>
                        </div>

                        <a href="https://github.com/junyoung96krap"
                        target="_blank" rel="noopener noreferrer">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>

                    </div>


                    <!-- Phone -->
                    <div class="contact-card">

                        <div class="contact-icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>

                        <div class="contact-info">
                            <h3>Phone</h3>
                            <p>010-6788-3484</p>
                        </div>

                    </div>

                </div>

                <div class="contact-message">

                    <h2>Let's Work Together</h2>

                    <p>
                        사용자 관점에서 문제를 발견하고,
                        제품의 품질을 높이는 QA Engineer가 되겠습니다.
                    </p>

                </div>

            </section>

        `);
    }

    // =========================================
    // Project Detail Modal
    // =========================================

    // 프로젝트별 상세 정보
    const projectDetails = {
        cluster: {
            type: "AUTOMOTIVE EMBEDDED QA",
            title: "Hyundai Cluster",
            description:
                "현대 제네시스 GV60 및 G90 차량의 클러스터 기능을 검증한 프로젝트입니다. 내비게이션과 클러스터가 연동되는 기능의 요구사항 분석, Test Case 설계, 기능 검증을 수행했습니다.",

            sections: [
                {
                    title: "프로젝트 소개",
                    items: [
                        "현대 제네시스 GV60 / G90 Cluster",
                        "팀원 : 2명 > 8명",
                        "프로젝트 기간 : 2019.11 ~ 2021.04"
                    ]
                },
                {
                    title: "주요 업무 및 담당",
                    items: [
                        "Cluster setup 단계에서 테스트 환경 구축 및 품질 검증",
                        "요구사항(CodeBeamer) 기반 Test Case 설계·작성 및 기능 검증",
                        "차량 경고 팝업, 계기판 경고등 등 Cluster 기능 검증",
                        "UI/UX 및 사용자 관점 검증",
                        "CANoe를 활용한 CAN 통신 및 신호 연동 검증",
                        "실차(필드 테스트) 기반 기능 검증",
                        "Jira 기반 결함 등록·추적, 수정 버전 회귀 테스트 수행",
                        "개발팀 및 자동화팀과 협업하여 테스트 자동화 지원"
                    ]
                },
                {
                    title: "주요 성과",
                    items: [
                        "요구사항 기반 Test Case 5,000건 이상 설계 및 수행",
                        "실차 테스트를 주도하여 벤치 환경에서 확인되지 않는 사용자 관점 이슈를 발굴하고 개발팀과 협업하여 개선",
                        "Jira를 활용해 결함 300건 이상 등록, 수정 검증 및 회귀 테스트 수행",
                        "자동화팀과 Test Case 및 검증 정보를 공유하여 테스트 자동화 환경 구축 지원",
                        "테스트 자동화 적용률을 0%에서 70%로 확대하고 수동 테스트 비중을 30%까지 감소"
                    ]
                }
            ],

            tools: ["CodeBeamer", "CANoe", "Jira","Test Bench"],
            skill: ["요구사항 분석", "Test Case 설계", "UI / UX 검증", "사용자 관점 검증", "기능 테스트", "통합 테스트", "필드 테스트", "회귀 테스트(Regression)", "경계값 분석", "동등분할 기법"]
            
        },

        volkswagen: {
            type: "AUTOMOTIVE EMBEDDED QA",
            title: "Volkswagen Cluster",
            description:
                "폭스바겐 티구안 차량의 Cluster(HMI) 기능에 대한 요구사항 분석, 기능 검증, 테스트 자동화를 수행한 프로젝트입니다.",

            sections: [
                {
                    title: "프로젝트 소개",
                    items: [
                        "폭스바겐 티구안 Cluster",
                        "팀원 : 6명",
                        "프로젝트 기간 : 2022.12 ~ 2024.12"
                    ]
                },
                {
                    title: "주요 업무 및 담당",
                    items: [
                        "Cluster setup 단계에서 테스트 환경 구축 및 품질 검증",
                        "Media 및 Assistance 기능 요구사항 분석, Test Case 설계·작성·수정",
                        "기능 검증 및 결함 등록·추적, 수정 버전 회귀 테스트 수행",
                        "G-Meter 신규 기능 Test Case 설계 및 기능 검증",
                        "CANoe, RBS Tool을 활용한 테스트 자동화 협업",
                        "VP/GP 업데이트 가이드 제작 및 배포",
                        "Version Matrix, 검증 체크리스트, 검증 환경 표준화 문서 작성",
                        "SW Release 수행 및 버전 관리",
                        "Volkswagen 개발팀 및 해외 QA팀과 협업하여 이슈 분석 및 검증"
                    ]
                },
                {
                    title: "주요 성과",
                    items: [
                        "Jira 기반 결함 138건 등록 및 추적 관리",
                        "Critical Issue 11건 중 2건(계기판 전원 꺼짐) 조기 발견으로 양산 전 품질 리스크 감소",
                        "테스트 자동화 협업을 통해 수동 테스트 100% > 자동화 테스트 60% (수동 40%) 달성",
                        "기능 검증 일정 단축으로 프로젝트 조기 완료 및 타 프로젝트 지원",
                        "유럽팀 공백으로 누락된 Assistance 기능 Test Case를 재작성하여 테스트 커버리지 확보",
                        "SW Release 90회 이상 수행하며 안정적인 배포 및 검증 프로세스 운영",
                        "Version Matrix 구축을 통해 버전별 변경사항 및 검증 이력 관리 체계 수립",
                        "검증 체크리스트와 표준화 문서를 제작하여 반복 가능한 테스트 환경 구축"
                    ]
                }
            ],

            tools: ["CANoe", "RBS Tool", "Jira", "CodeBeamer", "Test Bench"],
            skill: ["요구사항 분석", "Test Case 설계", "UI / UX 검증", "기능 테스트", "통합 테스트", "회귀 테스트(Regression)"]
        },

        avn: {
            type: "AUTOMOTIVE EMBEDDED QA",
            title: "Hyundai AVN",
            description:
                "현대 제네시스 차량의 AVN(내비게이션) 기능을 검증한 프로젝트입니다. 요구사항 분석부터 Test Case 제작, 실차, CANoe 검증, OTA 및 글로벌 다국어 검증까지 수행한 AVN 품질 검증 프로젝트",

            sections: [
                {
                    title: "프로젝트 소개",
                    items: [
                        "현대 제네시스 GV90 / G90 AVN",
                        "팀원 : 4명 > 12명",
                        "프로젝트 기간 : 2025.01 ~ 2026.06"
                    ]
                },
                {
                    title: "주요 업무 및 담당",
                    items: [
                        "AVN Setup 단계에서 테스트 환경 구축 및 품질 검증",
                        "요구사항(CodeBeamer/RS) 분석 기반 DTC 및 Dynamic Control Test Case 설계·작성",
                        "Jira 기반 결함 등록·추적, CANoe 및 실차 기반 기능 검증, 수정 버전 회귀 테스트 수행",
                        "Connected Service 개통 및 OTA 검증 환경 구축, OTA Test Case 설계 및 검증",
                        "글로벌 UI/UX 및 다국어(Localization) 검증",
                        "고객사 이슈 재현, 원인 분석 및 개발팀 협업",
                        "AI Tool(LG VCTM)을 활용한 Test Case 작성 및 검증 항목 보완",
                        "OTA 업데이트 가이드 제작 및 검증 프로세스 표준화",
                        "신규 인력 온보딩, 검증 장비 관리 및 사내 안전교육 운영"
                    ]
                },
                {
                    title: "주요 성과",
                    items: [
                        "결함 940건 등록, 진성 결함(Fixed) 812건(86.4%) 도출",
                        "Critical 약 30건, Major 160건의 주요 결함을 조기 발견하고 수정 완료까지 검증하여 제품 안정성 확보",
                        "OTA 검증 체계를 신규 구축하고 Test Case 20건 설계, 10회 이상 OTA 검증 수행",
                        "DTC 및 Dynamic Control Test Case 약 500건 제작을 통해 요구사항 기반 검증 체계 구축",
                        "약 20개 언어를 대상으로 UI/UX 및 다국어(Localization) 검증, 5회 이상의 Release 검증 수행",
                        "고객사 이슈 약 100건을 동일 환경에서 재현하고 수정 버전 회귀 테스트를 10회 이상 수행하여 품질 안정성 확보",
                        "AI Tool(LG VCTM)을 활용하여 Test Case를 고도화하고 테스트 커버리지 확대",
                        "OTA 업데이트 가이드 제작 및 표준화를 통해 OTA 검증 수행률을 0%에서 100%로 확대",
                        "신규 인력 4명 온보딩 및 실무 교육을 통해 빠른 업무 적응 지원"
                    ]
                }
            ],

            tools: ["LG VCTM(AI Tool)", "CANoe", "Jira", "Test Case"],
            skill: ["요구사항 분석", "Test Case 설계", "결함 관리", "UI / UX 검증", "탐색적 테스트", "사용자 관점 검증", "다국어 검증", "기능 테스트", "통합 테스트", "필드 테스트", "회귀 테스트(Regression)"]
        },

        saucedemo: {
            type: "WEB QA AUTOMATION · PERSONAL PROJECT",
            title: "SauceDemo",
            description:
                "Python과 Selenium을 활용해 웹 기능 테스트 자동화를 학습하고 구현한 개인 실습 프로젝트입니다.",

            sections: [
                {
                    title: "주요 테스트",
                    items: [
                        "로그인 성공 및 실패 검증",
                        "상품 가격 오름차순 / 내림차순 정렬 검증",
                        "상품 상세 페이지 이동 검증",
                        "장바구니 상품 추가 및 삭제 검증",
                        "장바구니 상품 수량 변경 검증",
                        "테스트 케이스별 PASS / FAIL 확인"
                    ]
                },
                {
                    title: "자동화 구현",
                    items: [
                        "Selenium WebDriver를 이용한 브라우저 제어",
                        "By를 활용한 웹 요소 탐색 및 상호작용",
                        "WebDriverWait를 활용한 요소 대기",
                        "Assertion을 활용한 기대 결과 검증",
                        "Try / Except를 활용한 테스트 예외 처리"
                    ]
                },
                {
                    title: "테스트 결과 관리",
                    items: [
                        "테스트 케이스별 PASS / FAIL 결과 관리",
                        "실패 원인 및 오류 메시지 기록",
                        "테스트 진행 상황 및 결과 집계"
                    ]
                }
            ],

            tools: ["Python", "Selenium", "VS Code"],
            skill: ["사용자 관점 검증"]
        }
    };

    // 모달을 열기 전 포커스 위치를 기억해 닫을 때 복원합니다.
    let previousFocusElement = null;

    // 모달 열기
    function openProjectModal(projectKey) {
        const project = projectDetails[projectKey];

        // 프로젝트 정보가 없으면 실행하지 않음
        if (!project) {
            return;
        }

        previousFocusElement = document.activeElement;

        // 프로젝트 유형과 제목 표시
        $("#projectModalType").text(project.type);
        $("#projectModalTitle").text(project.title);

        // 상세 설명 HTML 생성
        let detailHTML = `
            <section class="modal-section">
                <p>${project.description}</p>
            </section>
        `;

        // 주요 업무와 성과 표시
        project.sections.forEach(function (section) {
            detailHTML += `
                <section class="modal-section">
                    <h3>${section.title}</h3>
                    <ul class="modal-detail-list">
                        ${section.items.map(function (item) {
                            return `<li>${item}</li>`;
                        }).join("")}
                    </ul>
                </section>
            `;
        });

        // 사용 도구 표시
        detailHTML += `
            <section class="modal-section">
                <h3>사용 도구</h3>
                <div class="modal-tags">
                    ${project.tools.map(function (tool) {
                        return `<span>${tool}</span>`;
                    }).join("")}
                </div>
            </section>
        `;
        detailHTML += `
            <section class="modal-section">
                <h3>QA Skill</h3>
                <div class="modal-tags">
                    ${project.skill.map(function (skill) {
                        return `<span>${skill}</span>`;
                    }).join("")}
                </div>
            </section>
        `;

        // 생성한 내용을 모달에 넣기
        $("#projectModalBody").html(detailHTML);

        // 모달 표시
        $("#projectModal").addClass("show");
        $("#projectModal").attr("aria-hidden", "false");

        // 배경 페이지 스크롤 방지
        $("body").addClass("modal-open");

        // 닫기 버튼에 키보드 포커스
        $("#projectModalClose").trigger("focus");
    }

    // 모달 닫기
    function closeProjectModal() {
        $("#projectModal").removeClass("show");
        $("#projectModal").attr("aria-hidden", "true");

        // 배경 페이지 스크롤 복원
        $("body").removeClass("modal-open");

        // 모달을 열었던 요소로 키보드 포커스 복원
        if (previousFocusElement && typeof previousFocusElement.focus === "function") {
            previousFocusElement.focus();
        }
        previousFocusElement = null;
    }

    // 프로젝트 카드의 더보기 클릭
    // 프로젝트 카드 전체 클릭 시 모달 열기
    $(document).on("click", ".project-card", function (event) {

        // 프로젝트 카드에 지정된 프로젝트 ID 가져오기
        const projectKey = $(this).data("project");

        // 프로젝트 정보가 없는 경우 실행하지 않음
        if (!projectKey) {
            return;
        }

        // 더보기 링크의 기본 이동 동작 방지
        if ($(event.target).closest(".project-more").length) {
            event.preventDefault();
        }

        // 프로젝트 상세 모달 열기
        openProjectModal(projectKey);

    });

    // X 버튼 클릭 시 닫기
    $("#projectModalClose").on("click", function () {
        closeProjectModal();
    });

    // 모달 바깥 배경 클릭 시 닫기
    $("#projectModalBackdrop").on("click", function () {
        closeProjectModal();
    });

    // Escape 키로 닫기 및 모달 내부 포커스 유지
    $(document).on("keydown", function (event) {
        const $modal = $("#projectModal");
        if (!$modal.hasClass("show")) return;

        if (event.key === "Escape") {
            closeProjectModal();
            return;
        }

        if (event.key === "Tab") {
            const focusable = $modal.find('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])').filter(":visible");
            if (!focusable.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    // 모바일 메뉴 열기/닫기
    function closeMobileMenu() {
        $(".sidebar").removeClass("open");
        $("body").removeClass("sidebar-open");
        $("#mobileMenu").attr("aria-expanded", "false");
    }

    $("#mobileMenu").on("click", function () {
        const isOpen = $(".sidebar").toggleClass("open").hasClass("open");
        $("body").toggleClass("sidebar-open", isOpen);
        $(this).attr("aria-expanded", String(isOpen));
        $(this).attr("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    });

    // 모바일 메뉴 바깥을 누르면 닫기
    $(document).on("click", function (event) {
        if (
            $("body").hasClass("sidebar-open") &&
            !$(event.target).closest(".sidebar, #mobileMenu").length
        ) {
            closeMobileMenu();
        }
    });

});
