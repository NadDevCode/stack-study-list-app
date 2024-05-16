export default function TechnoAdd() {
    return (
        <div className="techno-add">
        <h1>Add a Techno</h1>
        <div>
            <form> 
            <label htmlFor="technoname">Name:</label>
            <br />
            <input type="text" name="technoname" id="technoname" />
            <br />
            <label htmlFor="technocategory">Category:</label>
            <br />
            <select name="technocategory" id="technocategory">
                <option value="">Select a category</option>
                <option value="front">Front</option>
                <option value="back">Back</option>
                <option value="fullstack">Fullstack</option>
                <option value="other">Other</option>
          </select>
          <br />
          <label htmlFor="technodescription">Description:</label>
          <br />
          <textarea
            name="technodescription"
            id="technodescription"
            cols="30"
            rows="10"
          ></textarea>
          <br />
          <input type="submit" value="Add Techno" className="btn"/>
        </form>
      </div>
    </div>
  );
}

