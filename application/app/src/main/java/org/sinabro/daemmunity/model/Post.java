package org.sinabro.daemmunity.model;

/**
 * Created by parktaeim on 2017. 7. 30..
 */

public class Post {
    private  String title;
    private String writer;
    private  int image;

    public Post(){

    }

    public Post(String title, String writer, int image){
        this.title = title;
        this.writer = writer;
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public int getImage() {
        return image;
    }

    public void setImage(int image) {
        this.image = image;
    }



}
