#!/bin/bash

# Open Brave with software rendering
brave-browser --disable-gpu "https://www.bing.com" &  
#sleep 10  # Give Brave more time to fully load

# Read search terms from the file into an array
mapfile -t search_terms < search1.txt
# Get the number of search terms
num_terms=${#search_terms[@]}

# Loop through the first 60 terms sequentially
for i in $(seq 0 35); do
    # Select the search term at index $i
    search_term="${search_terms[$i]}"

    # Focus on Brave window
    xdotool search --onlyvisible --class "Brave" windowactivate

    # Simulate typing the search term into the search box
    xdotool type --delay 100 "$search_term"
    
    # Simulate pressing Enter to perform the search
    xdotool key Return

    # Wait longer between searches to prevent issues
    sleep 5 
done
