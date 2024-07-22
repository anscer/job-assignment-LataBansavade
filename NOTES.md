# Notes

## Design Decisions
- **State Model**: Includes basic properties such as name, description, status, createdAt, updatedAt, and createdBy.
- **Authentication**: Implemented using Passport.js with session-based authentication to ensure that only authenticated users can create, update, or delete states.

## Additional Features
- **State Aggregation**: Added a method to the State model to summarize state counts and statuses by hours, days, and months.

## Assumptions
- The user model exists and is integrated with Passport.js for authentication.
- The application will run in a Docker container with MongoDB as a service.

## Future Improvements
- Implement more detailed logging and error handling.
- Add role-based access control for finer-grained permissions.
- Optimize database queries for better performance with large datasets.

## Questions
- Should we consider using JWT instead of session-based authentication for scalability?
- Are there any specific security requirements we should be aware of for this project?
