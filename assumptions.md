# Project Assumptions

## General Assumptions
1. **User Interface Theme**: The website will use a dark mode theme with yellow and orange as the primary colors.
   - **Rationale**: Based on user preference for dark themes and specific colors.
   - **Impact**: All components and pages will follow this theme for consistency.

2. **Responsiveness**: The website must be responsive across all devices (desktops, tablets, and mobiles).
   - **Rationale**: Ensuring a good user experience on various devices.
   - **Impact**: Use of responsive design techniques and media queries.

## Specific Components
3. **Logo Slider Component**: The logo slider will feature logos of companies like Zara, Fastrack, Campus, Bata, Being Human, and others, without using Vuetify.
   - **Rationale**: Based on the provided list of brands and preference to avoid Vuetify.
   - **Impact**: Custom implementation of slider functionality and animations.

4. **Product List Page**:
   - **Filters**: The page will include filters for price, product name, and rating. A toggle button will be used to show/hide the filter sidebar.
     - **Rationale**: User preference for filtering options and improved UX on smaller devices.
     - **Impact**: Implementation of filter functionality and toggle behavior.

   - **Pagination**: Backend pagination will be used to handle large datasets.
     - **Rationale**: Efficient data handling and improved performance.
     - **Impact**: Integration with backend API for pagination.

   - **Product Details Modal**: Clicking on the 'Product Details' button will open a modal with product details and also navigate to a new product detail page.
     - **Rationale**: Providing both a quick view option and a detailed view option.
     - **Impact**: Dual implementation of modal and new page navigation.

## Pages
5. **About Page**:
   - **Hero Section**: Adding a hero section with an image and dynamic text.
     - **Rationale**: Enhance visual appeal and engagement.
     - **Impact**: Design and animation considerations.

   - **Best Sellers and New Releases**: Display sections with images of products.
     - **Rationale**: Showcase popular and new products to attract users.
     - **Impact**: Fetching and displaying product data dynamically.

   - **Customer Support and Sales Data**: Include customer support information and graphical representation of website statistics.
     - **Rationale**: Provide helpful information and highlight key statistics.
     - **Impact**: Implementation of graphical elements and dynamic data updates.

6. **Contact Page**:

   - **Animated Heading Text**: An animated heading text with a background image.
     - **Rationale**: Attract user attention and enhance design.
     - **Impact**: Implementation of text animations and styling.

7. **Add to Cart Page**:
   - **Section Margins**: Adding margins to the entire section for better spacing.
     - **Rationale**: Improve readability and aesthetics.
     - **Impact**: CSS styling adjustments.

   - **Dummy API**: Use a dummy API for product data.
     - **Rationale**: Development and testing purposes.
     - **Impact**: Integration with a dummy data source.

## Contact Information
8. **Details**: Include address, phone number, email, and a message about availability.
   - **Rationale**: Provide clear contact information to users.
   - **Impact**: Addition of a contact information section in the relevant pages.
