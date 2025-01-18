```javascript
//Correct use of $in operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $match: {
      field: { $in: [1, 2, 3] }
    }
  }
]);
//Alternative solution using $elemMatch for nested arrays
db.collection.aggregate([
  {
    $match: {
      field: {
        $elemMatch: { $in: [1,2,3] }
      }
    }
  }
]);
```