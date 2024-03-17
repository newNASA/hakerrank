import React from 'react'
import '../scss/style.css'
import bannerImg from '../imgs/community.jpeg'
import binTree from '../imgs/binarytree-1.png'
function problem() {
    return (
        <div className='problems'>
            <div className='problems_title'>
                <h2>
                    It’s not a pipeline problem.
                    <span>It’s a spotlight problem.</span>
                </h2>
                <p>Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview, give developers the tools they need to showcase their skills, passion, and potential.</p>
            </div>
            <div className='miniMenu'>
                <a href='#'>prep</a>
                <a href='#'>screen</a>
                <a href='#'>interview</a>
            </div>
            <div className='hr_container'>
                <div className='hr_banner'>
                    <div className='banner_details'>
                        <p className='banner_details_label'>:: Coding practice ::</p>
                        <i class="cherry"></i>
                        <h3>Explore and expand your skills.</h3>
                        <p>Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers. Access the content you need to develop new skills – and land the job you’ve dreamed of.</p>
                        <a href='#'>
                            Sign up and practice
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg_icon svg_arrow_short"><path fill="white" clip-rule="evenodd" d="M6.35355 0.979699C6.15829 0.784437 5.84171 0.784437 5.64645 0.979699C5.45118 1.17496 5.45118 1.49154 5.64645 1.68681L9.45964 5.5H1.33331C1.05717 5.5 0.833313 5.72386 0.833313 6C0.833313 6.27614 1.05717 6.5 1.33331 6.5H9.45948L5.64645 10.313C5.45118 10.5083 5.45118 10.8249 5.64645 11.0201C5.84171 11.2154 6.15829 11.2154 6.35355 11.0201L11.0155 6.35821C11.0337 6.34049 11.0505 6.3214 11.0659 6.30111C11.0874 6.27262 11.1055 6.24235 11.1201 6.21087C11.145 6.15743 11.1608 6.09886 11.1653 6.03718C11.1678 6.00372 11.1669 5.97007 11.1627 5.93675C11.1599 5.91473 11.1557 5.89314 11.1501 5.87211C11.1284 5.78941 11.0851 5.7112 11.0202 5.64637L6.35355 0.979699Z"></path></svg>
                        </a>
                    </div>
                    <div className='banner_img'>
                        <img src={bannerImg} />
                    </div>
                </div>
                <div className='coding_skills'>
                    <div className='coding_skills_title'>
                        <p className='coding_skills_label'>:: Coding tests ::</p>
                        <h3><span>Join the movement.</span>Screen on skills.</h3>
                    </div>
                    <div className='problems_comparison'></div>
                    <div class="screen-art">
                        <i class="cherry"></i>
                        <svg width="77" height="590" viewBox="0 0 77 590" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.894 12C26.894 12 25.8402 475.357 26.894 502.347C27.9479 529.337 48.1764 565.727 76.4257 589" stroke="#B7C9CC"></path>
                            <path d="M64.4257 1H0.425663" stroke="#B7C9CC"></path>
                        </svg>
                    </div>
                </div>
                <div className='bin_tree'>
                    <div className='bin_tree_details'>
                        <h3>Leave the binary tree behind.</h3>
                        <i className="cherry"></i>
                        <p>Build coding questions using our library of dev-friendly content that challenges them to solve the problems they’d actually tackle on the job.</p>
                        <a href='#'>
                            Start free trial
                            <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg_icon svg_arrow_long"><path fill="#000" clip-rule="evenodd" d="M13.5468 0.836109C13.3527 0.593524 12.9987 0.554194 12.7562 0.748261C12.5136 0.942329 12.4742 1.29631 12.6683 1.53889L14.1872 3.4375H0.732544C0.421884 3.4375 0.170044 3.68934 0.170044 4C0.170044 4.31066 0.421884 4.5625 0.732544 4.5625H14.1872L12.6683 6.46111C12.4742 6.70369 12.5136 7.05767 12.7562 7.25174C12.9987 7.44581 13.3527 7.40648 13.5468 7.16389L15.7898 4.36012C15.82 4.3239 15.8451 4.28455 15.8649 4.24312C15.8709 4.23065 15.8765 4.21793 15.8815 4.20498C15.8928 4.17614 15.9016 4.14664 15.9079 4.11679C15.9161 4.07799 15.9201 4.0386 15.9201 3.9993C15.92 3.95724 15.9153 3.91509 15.9058 3.87369C15.8966 3.8336 15.8829 3.79421 15.8646 3.75629C15.8465 3.71871 15.8239 3.68257 15.7968 3.64861L15.7898 3.6399M13.5468 0.836109L15.7898 3.6399Z"></path></svg>
                        </a>
                    </div>
                    <div className='bin_tree_img'>
                        <img src={binTree} />
                    </div>
                </div>
                <div className='focusCode'></div>
                <div className='topContender'></div>
            </div>
        </div>
    );
}

export default problem;