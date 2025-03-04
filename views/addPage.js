const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    <div class="wiki-form">
      <div class="form-group">
        <label for="author_name" class="col-sm-2 control-label">Author Name</label>
        <div class="col-sm-10">
          <input id="author_name" name="author_name" type="text" class="form-control"/>
        </div>
      </div>
  
      <div class="form-group">
        <label for="author_email" class="col-sm-2 control-label">Author Email</label>
        <div class="col-sm-10">
          <input id="author_email" name="author_email" type="text" class="form-control"/>
        </div>
      </div>
      
      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control"/>
        </div>
      </div>
  
      <div class="form-group">
        <label for="content" class="col-sm-2 control-label">Content</label>
        <div class="col-sm-10">
          <textarea id="content" name="content" type="text" class="form-control"></textarea>
        </div>
      </div>
  
      <div class="form-group">
        <label for="status" class="col-sm-2 control-label">Content</label>
        <div class="col-sm-10">
          <select id="status" name="status" class="form-control">
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>
  
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  
  </form>
`);