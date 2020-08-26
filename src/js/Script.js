 
            $(function () {
                
                'use strict';
                
                var winH = $(window).height();
                
                $('header').height(winH);  
                
                $('header .container > div').css('top', (winH / 2) - ( $('header .container > div').height() / 2));
                
                $('.navbar ul li a.search').on('click', function (e) {
                    e.preventDefault();
                });
                $('.navbar a.search').on('click', function () {
                    $('.navbar form').fadeToggle();
                });
                
                $('.navbar ul.navbar-nav li a').on('click', function (e) {
                    
                    var getAttr = $(this).attr('href');
                    
                    e.preventDefault();
                    $('html').animate({scrollTop: $(getAttr).offset().top}, 1000);
                });
            })
        

        <nav className="navbar navbar-expand-lg navbar-light text-capitalize">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={ go } alt="#" />  </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#show-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="show-menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#agency">travel agency</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">contact us</a>
                        </li>
                        <li className="nav-item .search-container">
                            <a className="nav-link search" href="#"><i className="fa fa-search"></i></a>
                            <form>
                                <input type="search" />
                            </form>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa fa-user"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa fa-heart"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>