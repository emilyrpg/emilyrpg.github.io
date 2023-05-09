import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="is-preload landing">
		<div id="page-wrapper">

				<section id="banner">
					<div className="content">
						<header>
							<h2>The future has landed</h2>
							<p>And there are no hoverboards or flying cars.<br />
							Just apps. Lots of mother flipping apps.</p>
						</header>
						<span className="image"><img src="images/pic01.jpg" alt="" /></span>
					</div>
					<a href="#one" className="goto-next scrolly">Next</a>
				</section>

				<section id="one" className="spotlight style1 bottom">
					<span className="image fit main"><img src="images/pic02.jpg" alt="" /></span>
					<div className="content">
						<div className="container">
							<div className="row">
								<div className="col-4 col-12-medium">
									<header>
										<h2>Odio faucibus ipsum integer consequat</h2>
										<p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
									</header>
								</div>
								<div className="col-4 col-12-medium">
									<p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
									Blandit orci porttitor semper. Arcu phasellus tortor enim mi
									nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
									augue varius tempus lobortis porttitor accumsan consequat
									adipiscing lorem dolor.</p>
								</div>
								<div className="col-4 col-12-medium">
									<p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
									adipiscing adipiscing metus massa. Blandit orci porttitor semper.
									Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
									mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
									ipsum dolor nullam.</p>
								</div>
							</div>
						</div>
					</div>
					<a href="#two" className="goto-next scrolly">Next</a>
				</section>

				<section id="two" className="spotlight style2 right">
					<span className="image fit main"><img src="images/pic03.jpg" alt="" /></span>
					<div className="content">
						<header>
							<h2>Interdum amet non magna accumsan</h2>
							<p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
						</header>
						<p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
						<ul className="actions">
							<li><a href="#" className="button">Learn More</a></li>
						</ul>
					</div>
					<a href="#three" className="goto-next scrolly">Next</a>
				</section>

				<section id="three" className="spotlight style3 left">
					<span className="image fit main bottom"><img src="images/pic04.jpg" alt="" /></span>
					<div className="content">
						<header>
							<h2>Interdum felis blandit praesent sed augue</h2>
							<p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
						</header>
						<p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
						<ul className="actions">
							<li><a href="#" className="button">Learn More</a></li>
						</ul>
					</div>
					<a href="#four" className="goto-next scrolly">Next</a>
				</section>

				<section id="four" className="wrapper style1 special fade-up">
					<div className="container">
						<header className="major">
							<h2>Accumsan sed tempus adipiscing blandit</h2>
							<p>Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu consequat</p>
						</header>
						<div className="box alt">
							<div className="row gtr-uniform">
								<section className="col-4 col-6-medium col-12-xsmall">
									<span className="icon solid alt major fa-chart-area"></span>
									<h3>Ipsum sed commodo</h3>
									<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
								</section>
								<section className="col-4 col-6-medium col-12-xsmall">
									<span className="icon solid alt major fa-comment"></span>
									<h3>Eleifend lorem ornare</h3>
									<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
								</section>
								<section className="col-4 col-6-medium col-12-xsmall">
									<span className="icon solid alt major fa-flask"></span>
									<h3>Cubilia cep lobortis</h3>
									<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
								</section>
								<section className="col-4 col-6-medium col-12-xsmall">
									<span className="icon solid alt major fa-paper-plane"></span>
									<h3>Non semper interdum</h3>
									<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
								</section>
								<section className="col-4 col-6-medium col-12-xsmall">
									<span className="icon solid alt major fa-file"></span>
									<h3>Odio laoreet accumsan</h3>
									<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
								</section>
								<section className="col-4 col-6-medium col-12-xsmall">
									<span className="icon solid alt major fa-lock"></span>
									<h3>Massa arcu accumsan</h3>
									<p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
								</section>
							</div>
						</div>
                        
					</div>
				</section>

				<section id="five" className="wrapper style2 special fade">
					<div className="container">
						<header>
							<h2>Magna faucibus lorem diam</h2>
							<p>Ante metus praesent faucibus ante integer id accumsan eleifend</p>
						</header>
						<form method="post" action="#" className="cta">
							<div className="row gtr-uniform gtr-50">
								<div className="col-8 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Your Email Address" /></div>
								<div className="col-4 col-12-xsmall"><input type="submit" value="Get Started" className="fit primary" /></div>
							</div>
						</form>
					</div>
				</section>

		</div>

	</div>
        )
    }
}

export default Home;