import { Fragment } from "react";
import PageTitle from "../../layout/PageTitle";

const InstagramNewUpdate = () => {
  return (
    <Fragment>
      <section
        className="page_title"
        style={{ backgroundImage: "url(assets/img/blog/insta_new_update.png)" }}
      ></section>
      <h1 className="bg_text">Instagram New Updates</h1>
      <section className="portfolio-section section-gap p_indent">
        <div className="container">
          <h1 className="title text-center mb-5">
            Instagram new update - Instagram swipe up links to be replaced with
            link stickers
          </h1>
          <div className="section-heading text-left mb-50">
            <div className="blog_page text-justify">
              <p>
                Instagram is one of the most used social media platforms for
                social media marketing that helps in increasing brand awareness,
                getting quality leads and it is also used for entertainment
                purposes. Currently, Instagram is keeping more emphasis on
                improving the story interactions so it is changing the way
                external links are shared in the stories. The current Swipe up
                links options will be removed entirely and will be replaced by
                its new Link sticker option. Instagram confirmed that all users
                who can currently access the swipe-up link for Stories will be
                able to access the new link stickers. Swipe-up links for Stories
                will be removed at the end of this month.
              </p>
              <h5 className="mb-2 mt-2">
                Instagram says link stickers will provide a range of benefits
              </h5>
              <p>
                A more efficient way to create stories - Donation, Music, Poll,
                and now Link stickers in Instagram Stories enables you to
                express yourself and share what matters to you. Creative control
                - The sticker appears and works in the same way as previous ones
                (e.g. question, poll, and location). It can be switched to
                various styles, be resized, and put to the maximum impact
                wherever in your stories. Engagement improvement - The update
                might be a step forward. It will enable you to insert more
                prominent links in your Story frameworks, which might give you
                more options of clicking and focusing your story more on driving
                this action.
              </p>
              <h5 className="mb-2 mt-2">
                Lets use this new feature and share your views with us!
              </h5>
              <p>
                For more updates related to the IT industry, digital marketing,
                social media marketing, and game development industry stay tuned
                with us!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default InstagramNewUpdate;
