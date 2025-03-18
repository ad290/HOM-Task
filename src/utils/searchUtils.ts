import { User } from '../types';

// Trie Node implementation for efficient search
class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;
  users: User[];

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
    this.users = [];
  }
}

export class UserSearchTrie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(user: User) {
    const words = user.name.toLowerCase().split(' ');
    
    words.forEach(word => {
      let node = this.root;
      
      for (const char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char)!;
        node.users.push(user);
      }
      
      node.isEndOfWord = true;
    });
  }

  search(prefix: string): User[] {
    prefix = prefix.toLowerCase();
    let node = this.root;
    
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return [];
      }
      node = node.children.get(char)!;
    }
    
    return [...new Set(node.users)];
  }
}