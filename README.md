# Recipesme App     

## Build log:       

02/05/23:       

Basic setup on backend: local copy reverted to original, cloned version. Dependencies installed, `.env` file checked, test route checked ok, terminal reading ok.     

Frontend directory set up, `create-react-app` run, unneccessary default files/code deleted. **MaterialUI** installed and basic Header, Body and Footer components templated out. `body` margin set to `0px` in `index.css` to remove white border around app.       

Footer icons and positioning updated. Header updated and stripped back.     

**React Router** installed and implemented. Components added for Home, Index and Add. Navigation user footer tabs added: n.b. - if user manually navigates to a route, the tabs do not update accordingly at present.      

DB seeded with dummy data in prep for implementing index and detail components and functionality. Axios installed. First GET `/recipes` request working in FE - again I have had issues with the image url append functionality within the BE `recipeController.js`.      

Footer now fixed position: added vh-linked padding to bottom of `Body.js` to ensure data is not obscured by nav footer.     

Updated Recipe Index / Overview components: now displaying in flex-box with hidden div to ensure bottom row remains left-aligned.       

03/05/23:       

Now working on providing recipe detail. After some thinking (and advice getting) I have used a combination of `useNavigate()` and `useParams()` to pass recipe object id into an Axios request via the URL params.      

`RecipeDetail.js` component now successfuly recieving Axios requests. Next step is formatting details component(s).     

04/05/23:       

`RecipeIngredients.js` component added - props being passed from parent (RecipeDetail) by mapping over `res.data.ingredients` and storing this in a state to be passed as a prop. Similar approach used for `RecipeSteps.js`.

I found that props were often initially being passed as undefined, and when a `.map()` was called in these two child components I was predictably getting an error. I understand that an alternative approach might be to check if props are or are not undefined and then either render a loading spinner or map out elements from the prop. I am not at this stage sure which is the better approach, although I like how using multiple states in the parent groups similar actions together and makes the child components less cluttered.      

`uuid` installed and impemented in RecipeSteps and RecipeIngredients in order to generate unique keys for each element created by `.map()`s.        

Found an issue where the 'Recipes' navigation button in the footer would not return the user to the recipe index. Issue solved by changing the functionality (and indeed appearance) of this central button when the user is in recipe detail view. This was achieved through the use of a state in `App.js`, which conditionally changes how the footer renders. A function prop is then passed down to the `Footer.js` and `RecipeCard.js` components which updates the state accordingly. Seems to be working nicely!

05/05/23:       

Started building `AddRecipe.js` - needed a quick refresher on React forms. I've decided to go with a a single state in which the form input is saved, and I am using a changeHandler function which runs `onChange` within each input box, and uses `e.target.value` and `e.target.name` to update the `formInput` state as appropriate. Tested working ok using only simple string input fields.       

Next step is to add a submit handler function. At preset it simply logs the submitted form: once I have added input types I will test the `Axios.post()` request. Form validation function added in order to prevent empty fields from being sumbitted.     

Description changed from `<input>` to `<textarea>`, tags input changed from text to checkboxes. `formChangeHandler` updated to account for new checkbox input type. I'm undecided as to whether this is the best approach, or if it would be better to split this out into two separate functions.     

Image upload added, file is being attached successfully to the formInput object, using an `imageUploadHandler` function. During previous attempts at similar image upload functionality I was not making use of `target.files[]` and instead updating form data states with a file path.        

My next step is to allow for multiple ingredients / steps to be added to a recipe. My intial thoughts are to move these input out into child components.        

After some experimentation, I've got to the point where the two child components (`AddIngredient.js`, `AddStep.js`) update the `formInput` state in their parent `AddRecipe` component. The next step is to render the newly added ingredient/step array elements within the form and re-render a new, empty form field so that multiple steps/ingredients can be added.        

Tackling the simpler 'step' array first, I found that even though the `step` array in the `formInput` state was updating ok, the `AddRecipe` component was not updating so the added steps were not rendering at first. Using spread syntax when cloning the state (`const newFormInput = {...formInput}`) resolved this.       

Solved an issue where the `AppBody` component was not growing as its child element `AddRecipe` increased in size (the bottom of the form was not scrollable and therefore became in effect hidden) - used `display: table;` on `.app-body` in `Main.css`.       

`AddStep` input box was not clearing after submission: element was re-rendering with the previous value. I initally approached this through clearing the `step` state: however this meant that even though a second submission read as empty, the previous text value remained visible. Using `target` within `addButtonPress()` would of course not work (target being the `+` button); I therefore used `document.getElement [...].value = ''` to clear the text input after submit - this worked nicely!     

The `AddStep` input box does not currently submit on enter - I feel users would naturally choose this over the `+` button. Adding an `eventListener()` to `inputElement` sometimes causes errors (`Cannot read properties of null ()`) - instead I went for another function `submitOnEnterPress()` which is called `onKeyDown` and reuses `addButtonPress()` if `e.key === 'Enter'`. I'm pretty pleased with this solution as it feels quite neat and simple!      

07/05/23:       

Added steps now render within a component `Step.js` inside `AddStep`. A `-` button allows for previously added steps to be removed as well.     

Next, I am rolling out the same functionality to ingredients. Some code is just 'copy-paste' from `Step` / `AddStep`, however the fact that each ingredients array item is an object rather than a string brings some additional nuance. I've decided to split out `removeFieldHandler()` into `removeStepHandler()` and `removeIngredientHandler()` due to their differing approach to filtering arrays of strings and objects respectively. I have also used `.select()` in order to move the cursor from the `ingredient` input box on the right to the `quantity` input box on the left of `AddIngredient` as this makes for more user-friendly form completion.

I had previously been checking for empty ingredient/step inputs within `addFieldHandler()`, however the check that works for steps as strings does not work for ingredients as objects. I have instead decided to move this check out from `AddRecipe` to its child components `AddStep` and `AddIngredient` respectively.      

In implementing the above, I noticed a bug whereby pressing enter on an empty `amount-input` field also triggered an `onClick` event in the 'remove ingredient' button for the most recently logged ingredient. I was not able to trace back the cause of the issue, however by adding `onKeyDown={e => submitOnEnterPress(e)}` to the `amount-input` field rectified this issue.       

As I was about to move onto Axios testing for the `AddRecipe` form, I noticed that my (previously working) checkboxes no longer worked. I initially traced this issue back to the use of spread syntax (`const newFormInput = {...formInput}` - added after checkbox functionality was tested), however when I changed back to my initial approach of directly assigning the `formInput` state to the `newFormInput` variable, the checkboxes seemingly worked but would not save their `checked` prop upon further interaction with the form.      

Firstly, I finally made the call to separate out checkbox inputs from text inputs. I then implemented an `isChecked` state, intialised as an array of `false` booleans the length of the `tags` array. As checkboxes are checked and unchecked, `formInput.tags` is updated as before, but now the new `isChecked` array is also updated: the `checked` prop of each checkbox is set based on its respective index within the boolean `isChecked` array, thus storing checked statuses safely in state.     

First Axios post tests for adding recipes returned `500` errors relating to Mongoose Model validation errors: the problem lay with the ongoing issue I have had with getting image uploads to work on the backend (currently lacking correct AWS/Cloudfront keys in the `.env` file). With the validations around `image` and `imageURL` properties temporarily removed I was able to successfully post new recipe documents to the DB.     

Successful POST requests result in the user being navigated to the Recipe Index.        

11/05/23:       

Moving on to UPDATE functionality - this will be accessed through the Recipe Detail components. Buttons added to `RecipeDetail.js`.         

Naturally, I'm going to use the components in `/add_recipe` as a jumping off point. My inital thought is to copy and then adapt the `AddRecipe` component - and then directly reuse the Step/Add Step + Ingredient/Add Ingredient components within `UpdateRecipe.js`. Let's see if it will work!       

Routing set up from `Body` component - the `/update/` route will use an `:id` param to get the recipe data and pre-load the form. This should work, although I wonder whether this is the most efficient way given the recipe data is already populated within `RecipeDetail` is there a better way of passing on this data that does not require another GET?      

## To add / to-do:      
- MUI theming: need to look at the documentation in more detail and/or find a decent tutorial for this.     
- Footer nav icons do not update correctly if user manually navigates to a path.        
- Recipe steps cannot yet be reordered or edited during `AddRecipe` form submit.       
- When moving via routes some components render scrolled to the bottom - feels clumsy in most cases. Need to find cause and fix.        
- Edit recipe requires a duplicated GET request when accessed via Recipe Detail - can this be improved upon?        
- Remove any inline styles that might be triggering micro re-renders and slowing application down.      