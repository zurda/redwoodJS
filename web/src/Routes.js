// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/movie" page={MoviePage} name="movie" />
      <Route path="/weather" page={WeatherPage} name="weather" />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Private unauthenticated="home">
        <Route path="/posts/new" page={NewPostPage} name="newPost" />
        <Route
          path="/posts/{id:Int}/edit"
          page={EditPostPage}
          name="editPost"
        />
        <Route path="/posts/{id:Int}" page={PostPage} name="post" />
        <Route path="/posts" page={PostsPage} name="posts" />
        <Route path="/reviews/new" page={NewReviewPage} name="newReview" />
        <Route
          path="/reviews/{id:Int}/edit"
          page={EditReviewPage}
          name="editReview"
        />
        <Route path="/reviews/{id:Int}" page={ReviewPage} name="review" />
        <Route path="/reviews" page={ReviewsPage} name="reviews" />
      </Private>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
