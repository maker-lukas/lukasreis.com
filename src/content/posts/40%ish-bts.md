---
title: 40%ish Split Keyboard
description: Bts on how i made my own split keyboard
pubDate: Dec 30 2025
---

Hi Kyu!

Lukas here! We met in the Beagle Symposium. If you don't remember, well, Tracy must have already shown my keyboard a few times, but I wanted to send this email to talk about it a bit in more depth—like the process of making it and building it.


So everything started a few weeks after you left. You inspired me a lot, so I started to learn Dvorak and touch typing. It's pretty easy to learn touch typing mainly because in Dvorak I could not already look at the keyboard. I found this website, keybr.com, which helped me a lot. The other thing was just changing my layout to Dvorak and typing just typing. I got pretty fast using Dvorak; I was getting around 50 wpm in 2 weeks.

Then 2 years passed, wow, time passes fast. I got better at touch typing and Dvorak, and I know the whole keyboard by memory. So it's February 2025, and I learned about this organization called Hack Club, which is for teenagers 18 and under and gives you resources for your projects. You should really check it out at hackclub.com, it's really interesting.

A few months passed, I did some of their events, then there was a hardware event. I really wanted to build a keyboard for a really, like _really_ long time, but I never had the funds. But now with Hack Club, way more was possible. Also, I had never thought of making a fully custom keyboard—like the PCB, the case, and the code all custom.

So now starts the research part. I always thought I would want a 60% ortholinear keyboard, but every time I looked at a split keyboard it always felt like it was calling me. They look so cool. Then I decided on a 36-key split keyboard—so 18 keys per side—which is pretty risky because I had almost never used a mechanical keyboard, never ortholinear, and never without a number row. But I was all in.

I also decided a wired keyboard for my first keyboard would be adequate because I did not want to screw things up, and then an RP2040 microcontroller. To be specific, I used the RP2040-Zero by Waveshare. With all this, I could already start designing. I also had a few rules for the design:

1. The keyboard must be direct-connected, which means each switch has its own pin on the microcontroller instead of having a matrix with diodes. In the direct-connect layout, you connect one pin of the switch to a GPIO and the other to ground.
    
2. The PCB had to be reversible so I could order one design and use the same design for both sides. The reason is the minimum order quantity is 5 PCB pieces. If it wasn’t reversible, I would have 8 leftover PCBs—4 of each side. With the reversible design I use 2 PCBs and only get 3 leftovers.
    
3. Use USB-C to connect both sides of the keyboard.
    

So I proceeded with making the schematic of the PCB, which if you don't know is not required but helps a LOT in the PCB-making part. A schematic just shows what component connects to what. So this is my schematic:

![[schematic.png]]

This was one of my first schematics, so it's a bit messy. After the schematic came one of the hardest parts, which was choosing the layout of the keys. I tried so many versions and I had no idea if I would actually like it when it was fully done. My solution was printing a 1:1 copy of the layout on paper so I could somewhat try how it would feel. I found a layout that I was really happy with after like 35 tries.

Then the rest of the PCB was quite straightforward. For the reversible part, I just stacked 2 footprints on top of each other to reverse.

So this is the two footprints. It’s for an MX-style switch and it is hotswap. The red one is on the front layer and the blue on the back. When we put them on top of each other, you get a reversible design:

![[Screenshot_20251208_150120.png]]

Just like this. I also connected all the pads so they are linked:

![[Screenshot_20251208_150238.png]]

This was only for the switches. I had other solutions for the microcontroller and USB-C. Talking about that, the USB-C was really simple—just use one of those USB-Cs that are mid-mounted into the PCB. By doing this, one of the sides is going to have the USB-C a bit upwards and one downwards, but it's such a small difference that I wasn’t concerned.

![[Screenshot_20251208_154053.png]]

Then for the microcontroller it was as simple as flipping it so the pins align with the PCB. So one microcontroller goes upwards and the other downwards, similar to the USB-C but a bit different.

![[Screenshot_20251208_160127.png]]  
![[Screenshot_20251208_160450.png]]

After all that, the PCB was basically done. It was not a complicated PCB, but a fun one. I think it turned out really good for my first actually built keyboard PCB. (Yes, I have done many other PCBs but none were really finished so I never ordered them.) This is the final design of the PCB:

![[PCB.png]]

And the PCB is done!

After the PCB, I could move on to the case. I had really low knowledge of 3D modeling, but I decided to use Fusion, which I was a bit familiar with. The case was also one of the hardest parts, but I got it done after lots of tries and many prints.

![[Screenshot_20251208_162502.png]]  
![[Screenshot_20251208_162520.png]]  
![[Screenshot_20251208_162532.png]]

After the case, there was still the firmware. This was one of the easiest but still hard parts. I started with QMK since I thought it was the best firmware, but because I needed split direct-connect, I did not find any examples nor good documentation. So I started looking into other firmware like KMK, which is CircuitPython-based, but the documentation wasn’t great.

Then I remembered I had heard about a small firmware in development called rmk.rs, which is Rust-based, and I immediately loved it. It only needs one file to work, and if you want, you can have two files to get vial.today working. It was really straightforward. In the middle of the process I had a bug, and I went to their Discord and asked for help. The creator of RMK helped me. I just love smaller communities like this.

I got the firmware done and then it was time to submit the project. After a few days it got approved! Then I rushed to buy all the parts. For the parts, I chose silent switches—but not any silent switch; they use a different dampening technology so they don’t feel mushy. For the PCB I ordered from jlcpcb.com, and the rest of the parts were from AliExpress—microcontroller, keycaps, hotswap sockets. In total maybe a bit over 150€, not exactly sure.

After a few weeks of waiting, everything finally came. I was so excited. Immediately when I had everything I started to prepare to solder. This was my setup:

![[Pasted image 20251209164605.png]]  
![[IMG_5286.jpg]]

I even made a time-lapse while soldering everything:

![[Video Clip (2025-08-08 11_40_25).mp4]]

It felt so good to finally make it. It was awesome, and everything worked! I had already flashed code beforehand and it was just plug and type.

Now it’s time to actually show the keyboard with some good photos:

![[H30B0321.jpg]]  
![[H30B0322.jpg]]  
![[H30B0330.jpg]]  
![[H30B0329.jpg]]

I’ve still got a few more but I won’t bloat everything here. Isn’t it beautiful! It took a while to get used to it. I was averaging around 80 wpm on my laptop keyboard, and at first with my new keyboard I was only getting around 30 wpm, but in the same day I already got around 50 wpm. In the following weeks I caught up with my old speed.

Something I haven’t talked about yet is my layout—my layers and everything. I’d seen a few videos about how to use layers. This process also took a while to perfect. I don’t think it’s fully ready yet, but it works really well for my everyday needs. Because I use Vial, it is really easy to remap my keys in real time. My layout is not the most efficient, but it works for me.

This is my main layer. One thing you can see is that it’s in QWERTY and not Dvorak. That’s because I want to be able to change to Dvorak through the OS and not the hardware. So the OS layout is set to Dvorak, and that changes both the laptop keyboard and my keyboard. It’s what works best for me.

![[Pasted image 20251209175446.png]]

Layer 2 is numbers and some symbols. Again, not the best setup, but for me it works well.

![[Screenshot_20251209_180110.png]]

Layer 3 is a minor layer that I only sometimes use:

![[Screenshot_20251209_180119.png]]

Layer 4 is the last main layer and this one has arrow keys and some other things. I use this layer quite a lot:


I still have a few other layers but nothing I use daily. They’re mostly gaming layers, etc. I really should remake my layers and make something more efficient, but I’m not sure exactly how. Any tips?

That’s basically everything, but there is still one more thing. After a few months I had a really cool idea for the keyboard. I had this idea when a friend (also a Hack Clubber) was visiting. Coincidentally we were in the same city about 6 km apart.

The idea was a middle piece that connects both sides of the keyboard—basically turning it into a split-unibody keyboard. I started working on it immediately. It took like 3 prints to get the right size and angle. Then I stripped a short USB-C cable, put it inside the print, and it turned out great. I use it pretty often.

Here it is:

![[H30B0336.jpg]]

The other side is pretty ugly, but who cares—it’s always facing the table:

![[H30B0337.jpg]]

Here it is with the keyboard:

![test](/public/images/keyboard.jpg)

It works fabulously!

And that’s it. That is the whole process that I took to make this keyboard, which I call **40%ish**.