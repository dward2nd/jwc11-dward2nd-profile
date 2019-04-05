var app = new Vue ({
    el: '#main',
    data: {
        plats: [
            {
                name: 'facebook',
                info: 'Saksinkarn Petchkuljinda',
                link: 'https://www.facebook.com/dward2nd'
            }, {
                name: 'instagram',
                info: 'dward2nd',
                link: 'https://www.instagram.com/dward2nd'
            }, {
                name: 'github',
                info: 'dward2nd',
                link: 'https://github.com/dward2nd'
            }
        ],
        exps: [
            {
                name: 'youngdev',
                info: ' Young mobile-dev ณ วิทยาลัยศิลปะ สื่อ และเทคโนโลยี มหาวิทยาลัยเชียงใหม่'
            }, {
                name: 'icode',
                info: 'เข้าร่วมการแข่งขันเขียนโปรแกรม iCode ณ คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่'
            }, {
                name: 'webapp',
                info: 'เข้าร่วมการแข่งขันเขียนการสร้าง Web Application ในงานศิลปหัตถกรรมครั้งที่ 67'
            }, {
                name: 'eicon',
                info: 'เข้าร่วมการแข่งขันเขียนประกวดโครงงาน e-Learning ในงาน e-ICON ครั้งที่ 6 ที่สาธารณรัฐเกาหลี'
            }
        ],
        skills: [
            {
                name: 'Java',
                num: 80,
                bg: '#173f5f'
            }, {
                name: 'PHP',
                num: 75,
                bg: '#206398'
            }, {
                name: 'Basic HTML',
                num: 75,
                bg: '#3caea3'
            }, {
                name: 'C/C++',
                num: 50,
                bg: '#f6d55c'
            }, {
                name: 'Bootstrap',
                num: 40,
                bg: '#ed5538'
            }, {
                name: 'Data Structure & Algorithm',
                num: 25,
                bg: '#ff851b'
            }
        ]
    }
});