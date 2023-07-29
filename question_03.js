let topKFrequent = function(words, k) {
    // Create a frequency map to store word counts
    const wordFrequency = new Map();
    for (const word of words) {
      wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    }
  
    // Sort the unique words based on frequency and lexicographical order
    const sortedWords = [...wordFrequency.keys()].sort((a, b) => {
      const freqDiff = wordFrequency.get(b) - wordFrequency.get(a);
      if (freqDiff !== 0) {
        return freqDiff;
      }
      return a.localeCompare(b);
    });
  
    // Return the k most frequent words
    return sortedWords.slice(0, k);
  };