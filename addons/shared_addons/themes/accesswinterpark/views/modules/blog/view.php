					<!-- Main -->
					<main class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-8 col-md-push-4 col-lg-offset-1 col-lg-8 col-lg-push-3">
						
						{{ post }}
						<article class="post">
							{{ if post_image }}<img class="img-responsive" src="{{ post_image:image }}" alt="" />{{ endif }}
							<h3>{{ title }}</h3>
							<h6>
								Posted: {{ helper:date timestamp=created_on }}{{ if category }}<br />
								Category <a href="{{ url:site }}blog/category/{{ category:slug }}">{{ category:title }}</a>
								{{ endif }}
							</h6>
							{{ body }}
						</article>
						{{ /post }}
						
					</main>
					<!-- /Main -->
					
					<!-- Aside (Blog) -->
					<aside id="blog" class="col-xs-12 col-sm-12 col-md-4 col-md-pull-8 col-lg-3 col-lg-pull-9">
						
						{{ widgets:area slug="blog-aside" }}
					
					</aside>
					<!-- /Aside (Blog) -->