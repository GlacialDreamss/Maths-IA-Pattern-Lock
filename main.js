var lock = new PatternLock("#lock", {
    onPattern: function(pattern) {
      // Context is the pattern lock instance
      console.log(pattern)
     }
  });