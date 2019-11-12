import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';



it('shortenText does not alter string under 100 characters', () => {
        expect(shortenText(shortText)).toHaveLength(29);
});

it('shortenText should cut extra characters after 100 and add ...', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

it('wordCount should count words in a sentence', () => {
    expect(wordCount(posts)).toBe(233);
});

it('attachUserName should attach users full name to a post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
});

it('attachUserName should remove posts with no matched user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
});