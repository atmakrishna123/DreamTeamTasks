#DEBIAN INSTALLATION

I installed Debian on my personal computer. Debian is a popular, stable and versatile Linux distribution lnown for its strong community and package management system.

##STEP1: Downloading the Debian Installation Image
I visited the official debian website and chose the appropriate installation image for my system(64 bit). It took some time and I downloaded the ISO file to my computer.

##STEP2: Bootable USB Drive
Inserted a USB Flash Drive to my computer and i restarted the computer. Then I entered the BIOS setting( Here i use keys like F2,F12,Del and Esc to navigate during boot). Here I change the boot order to priorotize booting from the USB Drive. I save and exit the BIOS and the computer is ready to boot into the Debian Installer.

##STEP3: Installation process
I find a Debian12 menu which has many options and I go for the Graphical Install. Here I choose my language, country and keyboard settings. The Debian installer now loads some parts of software and is now automatically connecting with the internet. After which I enter a hostname for my system and clicks continue. 

##STEP4: Setting up newtork and partitioning
Then a tabular box comes with configutre the network option and I click continue so that I dont have to configure any network. In order to use sudo I dont choose the root password and clicks continue. Now I enter the username and password for the new user. Afterwards I am asked for my partitioning and I chose "Sepearte /home partition" as the partitioning method. Later I am asked the disk to partition and i select the required hard disk where it is going to be installed. I give "All files in one partition" option as for partitioning schema. Click the option to Finish partitoning and write changes to disk and select yes in the next tabular box.

##STEP5: Installing the base system
After partioning the installer will copy the base system files to the disk. This process took quite some time due to my system's speed and internet speed.

##STEP6: Package Configuration
It takes place after base system installation. We will be prompted to configure certain system settings like locale settings, keyboard layout, time zone and network settings. I was then asked to enter the hostname and network configuration.

##STEP7: Software Selection
We are then asked to choose a desktop environment suchas GNOME, KDE, Xfce, LXQt etc. We can also choose specific roles for the systsem like setting up a web browser or file server. 

##STEP8: Install the bootloader
The installer then asks if I want to install the GRUB bootloader. This is essential for booting my Debain System. Choose Yes to install GRUB on the main disk.

##STEP9: Finish Installation
Reboot the system once we install the new system.

##STEP10: Post-Installation Configuration
Once Debian is booted run the commands "sudo apt update" and "sudo apt upgrade" to ensure the system is up-to-date.
