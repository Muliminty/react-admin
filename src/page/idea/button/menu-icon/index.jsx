import { useState } from 'react';
import styles from './style.module.scss';

const MenuIcon = () => {
    // 独立的 active 状态分别为 ham1, ham2, ham3
    const [activeHam1, setActiveHam1] = useState(false);
    const [activeHam2, setActiveHam2] = useState(false);
    const [activeHam3, setActiveHam3] = useState(false);

    const toggleHam1 = () => setActiveHam1(!activeHam1);
    const toggleHam2 = () => setActiveHam2(!activeHam2);
    const toggleHam3 = () => setActiveHam3(!activeHam3);

    return (
        <div className={styles['container']}>
            <h2>Icon</h2>

            <div>
                {/* 第一个SVG */}
                <svg
                    className={`ham hamRotate ham1 ${activeHam1 ? 'active' : ''}`}
                    viewBox="0 0 100 100"
                    width="80"
                    onClick={toggleHam1}
                >
                    <path
                        className="line top"
                        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                    />
                    <path className="line middle" d="m 30,50 h 40" />
                    <path
                        className="line bottom"
                        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                    />
                </svg>

                {/* 第二个SVG */}
                <svg
                    className={`ham ham2 ${activeHam2 ? 'active' : ''}`}
                    viewBox="0 0 100 100"
                    width="80"
                    onClick={toggleHam2}
                >
                    <path
                        className="line top"
                        d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
                    />
                    <path className="line middle" d="m 30,50 h 40" />
                    <path
                        className="line bottom"
                        d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
                    />
                </svg>

                {/* 第三个SVG */}
                <svg
                    className={`ham ham3 ${activeHam3 ? 'active' : ''}`}
                    viewBox="0 0 100 100"
                    width="80"
                    onClick={toggleHam3}
                >
                    <path
                        className="line top"
                        d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568"
                    />
                    <path className="line middle" d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7"
                    />
                    <path
                        className="line bottom"
                        d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0"
                    />
                </svg>
            </div>
        </div>
    );
};

const Ham1 = () => {
    // 独立的 active 状态分别为 ham1, ham2, ham3
    const [activeHam1, setActiveHam1] = useState(false);

    const toggleHam1 = () => setActiveHam1(!activeHam1);

    return (
        <svg
            className={`ham hamRotate ham1 ${activeHam1 ? 'active' : ''}`}
            viewBox="0 0 100 100"
            width="80"
            onClick={toggleHam1}
        >
            <path
                className="line top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
                className="line bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
        </svg>
    );
};
export default MenuIcon;
