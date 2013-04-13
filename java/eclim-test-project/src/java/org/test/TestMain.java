package org.test;

import java.awt.BorderLayout;
import java.awt.Container;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class TestMain implements KeyListener, ActionListener
{
    JFrame frame;

    public TestMain()
    {
        frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
        frame.setResizable(false);
        frame.setBounds(50, 50, 640, 480);
        frame.setLayout(new BorderLayout());
        //frame.setLayout(null);
        
        //Container container = frame.getContentPane(); 
        //container.setLayout(null);

        JLabel label = new JLabel("fefehfefeej"); //label.setBounds(50, 50, 100, 20);

        //container.add(label);

        //label.setBounds(50, 50, 100, 20);
        frame.add(label);
    }

    public static void main(String[] argv)
    {
        TestMain test = new TestMain();
        //System.out.println("Hello World");
    }

	@Override
	public void actionPerformed(ActionEvent e)
    {
	}

	@Override
	public void keyTyped(KeyEvent e)
    {
        System.out.println("KeyChar = " + e.getKeyChar());
        System.out.println("KeyCode = " + e.getKeyCode());
	}

	@Override
	public void keyPressed(KeyEvent e)
    {
	}

	@Override
	public void keyReleased(KeyEvent e)
    {
	}
}
