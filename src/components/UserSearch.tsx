import React, { useEffect, useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import { User } from '../types';
import { UserSearchTrie } from '../utils/searchUtils';
import { debounce } from '../utils/debounce';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function UserSearch() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTrie, setSearchTrie] = useState<UserSearchTrie | null>(null);
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        
        const trie = new UserSearchTrie();
        data.forEach((user: User) => trie.insert(user));
        setSearchTrie(trie);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = useCallback(
    (query: string) => {
      if (!searchTrie || query.length === 0) {
        setSearchResults(users);
        return;
      }
      const results = searchTrie.search(query);
      setSearchResults(results);
    },
    [searchTrie, users]
  );

  const debouncedSearch = debounce(handleSearch, 300);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white"
        >
          Our Users
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search users..."
            onChange={(e) => debouncedSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          />
        </motion.div>

        {loading ? (
          <div className="text-center text-white">Loading users...</div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {(searchResults.length > 0 ? searchResults : users).map((user) => (
              <motion.div
                key={user.id}
                variants={item}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-shadow border border-gray-600 transform hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{user.name}</h3>
                <p className="text-blue-300 text-sm sm:text-base mb-1">{user.email}</p>
                <p className="text-gray-300 text-sm sm:text-base mb-2">{user.phone}</p>
                <p className="text-sm text-gray-400">
                  Company: {user.company.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}