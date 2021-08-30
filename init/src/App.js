import './App.css';

import nodeIcon from './assets/nodejs.png';
import dockerIcon from './assets/docker.png';
import reactIcon from './assets/react.svg';
import gitlabIcon from './assets/slp-logo.svg';

function App() {
    return (
        <div>
            <Header />
            <Divider />
            <SelfIntroduce />
            <Divider color='white' />
            <Education />
            <Divider />
            <Skill />
            <Divider color='white' />
            <Characteristic />
            <Divider />
            <Hobbies />
        </div>
    );
}

function Header() {
    return (
        <SectionContainer className='justify-content-center align-items-center' id="container--header">
            <SectionItem className='my-5'>
                <span
                    className='h3 d-flex justify-content-center align-items-center text-white logo--container'
                    style={{ height: '100px', width: '100px' }}
                >
                    L
                </span>
                <div className=' d-flex flex-column'>
                    <span className='h2 pl-4'>
                        <b>Lê Phan Minh Thái</b>
                    </span>
                    <span className='pl-4'>SV năm 4 - ĐH Cần Thơ</span>
                </div>
            </SectionItem>
            <SectionItem className='logo--container flex-column carrer--job'>
                <span className='h4 text-white text-uppercase'>
                    <b>Mục tiêu nghề nghiệp</b>
                </span>
                <span className='h6 text-white d-block' style={{ width: 400 }}>
                    Được làm việc trong môi trường năng động, sáng tạo. Khám phá và hoàn thiện bản
                    thân, học hỏi thêm nhiều kinh nghiệm về ngành lập trình và các công nghệ xu
                    hướng. Tự thiết kế, viết và deploy được một ứng dụng hoàn chỉnh và bảo trì nó
                    trong quá trình chạy thực tế.
                </span>
            </SectionItem>
        </SectionContainer>
    );
}

function Skill() {
    return (
        <SectionContainer>
            <SectionItem className='logo--container  '>
                <span className='h3 text-white text-uppercase'>Skill</span>
            </SectionItem>
            <SectionItem className=' flex-column'>
                <div
                    className='d-flex flex-row flex-wrap justify-content-between align-items-center'
                    style={{ width: 400 }}
                >
                    <div className='h5 mb-4 d-flex flex-column align-items-center justify-content-center'>
                        <img src={reactIcon} alt='react' width='48' height='48' />
                        <span>React</span>
                    </div>
                    <div className='h5 mb-4 d-flex flex-column align-items-center justify-content-center'>
                        <img src={nodeIcon} alt='react' width='48' height='48' />
                        <span>Nodejs</span>
                    </div>
                    <div className='h5 mb-4 d-flex flex-column align-items-center justify-content-center'>
                        <img src={dockerIcon} alt='react' width='48' height='48' />
                        <span>Docker*</span>
                    </div>
                    <div className='h5 mb-4 d-flex flex-column align-items-center justify-content-center'>
                        <img src={gitlabIcon} alt='react' width='48' height='48' />
                        <span>Gitlab*</span>
                    </div>
                    (* Đang tìm hiểu thêm)
                </div>
            </SectionItem>
        </SectionContainer>
    );
}
function Education() {
    return (
        <SectionContainer>
            <div className='col-lg-6 justify-content-center align-items-center p-2 py-4 logo--container d-lg-none d-flex' style={{height: '100%'}}>
                <span className='h3 text-white text-uppercase'>Học vấn</span>
            </div>
            <SectionItem>
                <div className='d-flex flex-column' style={{ width: 400 }}>
                    <div className='h5 mb-4'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            id='Layer_1'
                            enable-background='new 0 0 511.962 511.962'
                            height='24'
                            viewBox='0 0 511.962 511.962'
                            width='24'
                        >
                            <g>
                                <path d='m502.343 177.3-240-104c-4.059-1.759-8.665-1.759-12.724 0l-240 104c-12.824 5.557-12.827 23.804 0 29.361l86.362 37.423v99.896c0 53.832 70.28 96 160 96s160-42.168 160-96v-99.896l16-6.933v170.829c0 8.836 7.164 16 16 16s16-7.164 16-16v-184.695l38.362-16.623c12.824-5.557 12.826-23.804 0-29.362zm-246.362-71.882 199.759 86.563-15.843 6.865-181.932-22.742c-8.769-1.089-16.765 5.124-17.861 13.892s5.124 16.765 13.892 17.861l128.142 16.018-126.157 54.668c-112.857-48.905-88.82-38.489-199.759-86.563zm128 238.563c0 15.075-12.373 30.596-33.947 42.581-51.381 28.545-136.575 28.629-188.106 0-21.574-11.985-33.947-27.506-33.947-42.581v-86.029l121.638 52.71c4.052 1.756 8.657 1.762 12.724 0l121.638-52.71z' />
                            </g>
                        </svg>{' '}
                        Đại học Cần Thơ - năm 4 (2018-2023)
                        <br />
                        <span className='h6'>Ngành: Công nghệ thông tin </span>
                        <br />
                        <span className='h6'>GPA: 3.70 </span>
                    </div>
                </div>
            </SectionItem>
            <div className='col-lg-6 justify-content-center align-items-center p-2 py-4 logo--container d-none d-lg-flex'>
                <span className='h3 text-white text-uppercase'>Học vấn</span>
            </div>
        </SectionContainer>
    );
}

function Hobbies() {
    return (
        <SectionContainer>
            <SectionItem className='logo--container  '>
                <span className='h3 text-white text-uppercase'>Sở thích</span>
            </SectionItem>
            <SectionItem className=' '>
                <div className='d-flex flex-column'>
                    <div
                        style={{ width: 300 }}
                        className='d-flex justify-content-between align-items-center mb-4'
                    >
                        <span className='h5'>+ Đọc sách </span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            fill='currentColor'
                            class='bi bi-book'
                            viewBox='0 0 16 16'
                        >
                            <path d='M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z' />
                        </svg>
                    </div>
                    <div
                        style={{ width: 300 }}
                        className='d-flex justify-content-between align-items-center'
                    >
                        <span className='h5'>+ Tìm hiểu công nghệ mới</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            fill='currentColor'
                            class='bi bi-search'
                            viewBox='0 0 16 16'
                        >
                            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                        </svg>
                    </div>
                </div>
            </SectionItem>
        </SectionContainer>
    );
}

function SelfIntroduce() {
    return (
        <SectionContainer>
            <SectionItem className='logo--container  '>
                <span className='h3 text-white text-uppercase'>THÔNG TIN LIÊN HỆ</span>
            </SectionItem>
            <SectionItem className=''>
                <div className='d-flex flex-column' style={{ width: 400 }}>
                    <span className='h5 mb-4'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            fill='currentColor'
                            class='bi bi-person-circle'
                            viewBox='0 0 16 16'
                        >
                            <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                            <path
                                fill-rule='evenodd'
                                d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
                            />
                        </svg>{' '}
                        Lê Phan Minh Thái
                    </span>
                    <span className='h5 mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar2" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
</svg>{' '}
                        2000
                    </span>
                    <span className='h5 mb-4'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            fill='currentColor'
                            class='bi bi-envelope'
                            viewBox='0 0 16 16'
                        >
                            <path d='M0 4a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h32a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z' />
                        </svg>{' '}
                        thaib1809180@student.ctu.edu.vn
                    </span>
                    <span className='h5 mb-4'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            fill='currentColor'
                            class='bi bi-telephone'
                            viewBox='0 0 16 16'
                        >
                            <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
                        </svg>{' '}
                        0949198163
                    </span>
                    <span className='h5'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            fill='currentColor'
                            class='bi bi-geo-alt'
                            viewBox='0 0 16 16'
                        >
                            <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
                            <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
                        </svg>{' '}
                        KDC 351, đường 30/4, P. Hưng Lợi, Q. Ninh Kiều, Tp Cần Thơ
                    </span>
                </div>
            </SectionItem>
        </SectionContainer>
    );
}

function Characteristic() {
    return (
        <SectionContainer>
            <div className='col-lg-6 justify-content-center align-items-center p-2 py-4 logo--container d-lg-none d-flex' style={{height: '100%'}}>
                <span className='h3 text-white text-uppercase'>Tính cách</span>
            </div>
            <SectionItem className=' '>
                <div className='d-flex flex-column' style={{ width: 400 }}>
                    <span className='h5 mb-4'>
                        + Thân thiện, hòa đồng, luôn biết lắng nghe người khác.
                    </span>
                    <span className='h5'>
                        + Ham học hỏi, tìm hiểu bản thân và những gì cần thiết cho công việc cũng
                        như cuộc sống
                    </span>
                    <span className='h5'>
                        + Có tinh thần trách nhiệm trong công việc
                    </span>
                </div>
            </SectionItem>
            <div className='col-lg-6 justify-content-center align-items-center p-2 py-4 logo--container d-none d-lg-flex' style={{height: '100%'}}>
                <span className='h3 text-white text-uppercase'>Tính cách</span>
            </div>
        </SectionContainer>
    );
}

function SectionItem({ children, className = '', style = {} }) {
    const totalClassName = `col-lg-6 d-flex justify-content-center align-items-center ${className} p-2 py-4`;
    return (
        <div className={totalClassName} style={{ height: '100%', ...style }}>
            {children}
        </div>
    );
}

function SectionContainer({ children, className = '' }) {
    return (
        <div className={`section--container d-flex flex-column flex-lg-row ${className} shadow-sm`}>
            {children}
        </div>
    );
}

function Divider({ color = '#007bff' }) {
    return <div style={{ height: '10px', width: '100%', backgroundColor: color }}></div>;
}

export default App;
