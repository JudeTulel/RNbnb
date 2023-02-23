import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';

const Post = (props) => {
 const post = props.post
  return (
    <View style={styles.container}>
      <Image
        source={post.image}
        style={styles.image}
      />
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.bed} beds. {post.bedroom} bedrooms</Text>
      <Text style={styles.desc}>
        {post.type}. Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry\'s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        of Lorem Ipsum.
      </Text>
      <Text style={styles.price}>{post.price} Ksh / night</Text>
    </View>
  );
};

export default Post;
