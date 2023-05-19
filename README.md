
This is a BLOG API that allows you to perform CRUD operations on your blog data. 


The API endpoint is http://localhost/3000/api/v1.

To run the API, follow these steps:

		1. Clone the repository from the GitHub page.
		2. Create a file named ".env" and add the following content:
			PORT=3000
			MONGO_URI={your MongoDB database URL}
		3. Open the terminal on your computer.
		4. Navigate to the BLOG API directory.
		5. Type "npm install" to install all the required packages.
 		6. Run the command "npm start" to start the API execution.
		7. The API has been successfully executed.


This API supports four methods: GET, CREATE, PATCH, and DELETE. These methods allow you to perform various operations on the API, including retrieving data (GET), creating new data (CREATE), updating existing data (PATCH), and deleting data (DELETE).

	1. To retrieve all the data from the database, you can use the GET method.

		There are optional queries that you can use:

			- "author": OPTIONAL, it will only return blogs with the specified author.
			- "title": OPTIONAL, it will only return blogs with the specified title.
			- "sort": OPTIONAL, it allows you to specify the sorting order of the blogs. By default, the blogs are listed based on their creation time. The "sort" value can be set to "author", ".author", "title", or ".title" to sort the blogs based on the chosen value.

		Please note that the "sort" value must be one of the mentioned options ("author", ".author", "title", ".title") in order to work properly.

	
	2. To create and store new blog data to your api,you should use CREATE method with gateway="/create" and also you have to pass 'author-name', 'blog-title' and 'blog-content' through the body of the request.

		EXAMPLE: 
			    {
			        "author" : author-name,
			        "title"  : blog-title,
			        "blog"   : blog-content
			     }

	3. To update the stored data in your database, you should use PATCH method with gateway="/update".
	    
		request body:
				old-author-name => required,
				old-blog-title => required,
				new-blog-content => required

		EXAMPLE: 
				{
					"author": old-author-name,
					"title": old-blog-title,
					"blog": new-blog-content
				}
	
	4. To delete the stored blog data from the database, you should use DELETE method with gateway="/delete".

		query: 
				author-name => required,
				blog-title => required

		EXAMPLE: 
				{
					"author": author-name,
					"title": blog-title
				}
