export const FAQ_Options = [
  {
    id: 1,
    title: 'General Query',
    slug: 'general',
    questions: [
      {
        title: 'How do I create an account?',
        render: () => (
          <>
            {' '}
            <li>
              Step 1: Click on{' '}
              <span className='text-[#0F52BA]'> “Sign up.”</span>
            </li>
            <li>
              Step 2: Enter your{' '}
              <span className='text-[#0F52BA]'> “Email or mobile number.”</span>
            </li>
            <li>Step 3: Choose a password.</li>
            <li>
              Step 4: Select the registration type, either{' '}
              <span className='text-[#0F52BA]'> “Marriage or Dating”</span>
            </li>
            <li className='mt-[30px]'>
              after selection of registration type , you’ll be redirecting to
              your own dashboard and at this stage you’ll have successfully
              registered on HappyMilan. But you’ll be restricted to send request
              until you don’t complete the registration form. Once we’ve all the
              information, we’ll be able to give you perfect suggestion matches
              based on your information.
            </li>
            <li className='mt-[21px]'>
              Wish you’ll have great experience on HappyMilan.com
            </li>
          </>
        )
      },
      {
        title: 'Is this platform free to use?',
        answer:
          'We offer both free and premium memberships. Free members can create profiles, browse others, and use basic chat features, while premium members can access advanced search filters, unlimited messaging, and other exclusive features.'
      },
      {
        title: 'Is happyMilan for matrimony, dating or social account purpose?',
        answer:
          'HappyMilan is a social networking website that caters to multiple categories: long term, dating and social. Users can select either option when registering.'
      },
      {
        title: 'What services does this platform provide?',
        answer:
          'Our platform connects people for dating, long term, and social connections. You can explore profiles, chat, and build relationships based on your preferences, whether you are seeking friendship, dating, or a long term relationship like marriage.'
      },
      {
        title: 'How can I manage my profile and account settings?',
        answer:
          'After logging in, you can personalize your profile and update your information. At Happy Milan, your privacy is our top priority. With advanced privacy settings, you can ensure a safe and secure experience on the platform.'
      },
      {
        title: 'Can I use the platform on my mobile phone?',
        answer:
          'Yes, our platform is optimized for mobile use. You can access our services directly through a mobile browser or download our mobile app for a better experience.\n\nDownload App\nAndroid Version | iOS Version'
      }
    ]
  },
  {
    id: 2,
    title: 'Profile',
    slug: 'profile',
    questions: [
      {
        title: 'Can I change my profile information?',
        answer:
          'Yes, you can edit your profile information at any time by going to my profile. This includes updating your photos, bio, and preferences.'
      },
      {
        title: 'How can I delete my account?',
        answer:
          'If you wish to delete your account, go to "Account Settings / Profile Settings" and select "Delete Account." Please note that this action is irreversible, and all your data will be permanently removed.'
      },
      {
        title: 'Can I recover my account after deletion?',
        answer:
          'Unfortunately, once an account is deleted, it cannot be recovered. You will need to create a new account if you wish to use our services again.'
      },
      {
        title: 'How do I customize my profile to attract more connections?',
        answer:
          'Make sure to upload a clear profile picture, write a genuine bio, and share your interests and preferences. Being honest and engaging helps attract connections that align with your interests.'
      },
      {
        title: 'How do I know if someone is genuinely interested in me?',
        answer:
          'Look for consistent communication and mutual interest in conversations. Our platform also offers features like "Likes" and "Favorites," which can indicate someone\'s interest in your profile.'
      },
      {
        title: 'How can I contact customer support?',
        render: () => (
          <>
            <p>You can reach out to us through any of the following options:</p>
            <ul className='mt-2'>
              <li className='space-y-2'>
                <p>
                  <b>Email:</b> help@happpymilan.com
                </p>
                <p>
                  <b>Call:</b> +91 91048 14072
                </p>
                <p>Live Chat: Click here to chat with us</p>
              </li>
            </ul>
          </>
        )
      },
      {
        title: 'I want to hide my profile',
        render: () => (
          <>
            <p>
              Yes, you can hide your profile for a specific period. To do so,
              follow these steps:
            </p>
            <ul className='space-y-2 pt-2 pb-2'>
              <li>
                <b>1.</b> Go to your Account Settings.
              </li>
              <li>
                <b>2.</b> Click on Profile Settings.
              </li>
              <li>
                <b>3.</b> Select the duration for which you'd like to hide your
                profile.
              </li>
              <li>
                <b>4.</b> Click on Hide Profile.
              </li>
            </ul>
            <p>
              This will temporarily hide your profile as per your selected
              duration.
            </p>
          </>
        )
      },
      {
        title: 'I want to hide my phone number',
        render: () => (
          <>
            <p>
              We prioritize your privacy and do not share your mobile number or
              address with any user without your permission. Additionally, you
              can secure your profile by following these steps:
            </p>
            <ul className='space-y-2 pt-2 pb-2'>
              <li>
                <b>1.</b> Log in to your account.
              </li>
              <li>
                <b>2.</b> Go to Account Settings.
              </li>
              <li>
                <b>3.</b> Navigate to the Privacy Settings section.
              </li>
              <li>
                <b>4.</b> Select Profile Privacy Options and adjust the settings
                to control your profile visibility.
              </li>
              <li>
                <b>5.</b> Save your changes.
              </li>
            </ul>
            <p>
              Your phone number and other sensitive information will now be
              hidden based on your selected privacy preferences.
            </p>
          </>
        )
      },
      {
        title: 'I want to change my email address',
        render: () => (
          <>
            <p>Yes, you can update your email address. Follow these steps:</p>

            <ul className='space-y-2 pt-2 pb-2'>
              <li>
                <b>1.</b> Go to Account Settings.
              </li>
              <li>
                <b>2.</b> Navigate to Login Details.
              </li>
              <li>
                <b>3.</b> Click the Edit button and enter your current Email ID.
              </li>
              <li>
                <b>4.</b> Enter your new email ID.
              </li>
              <li>
                <b>5.</b> Verify the change by entering the OTP sent to your new
                email.
              </li>
            </ul>
            <p>
              Once completed, your email address will be successfully updated.
            </p>
          </>
        )
      },
      {
        title: 'How do I know my profile is premium?',
        render: () => (
          <>
            <p>
              You can check if your profile is premium by following these steps:
            </p>
            <ul className='space-y-2 pt-2 pb-2'>
              <li>
                <b>1.</b> Log in to your account.
              </li>
              <li>
                <b>2.</b> Go to Account Settings and click on Plan Details to
                see your subscription status.
              </li>
              <li>
                <b>3.</b> Look for the Premium Badge. If your profile is
                premium, it may display a premium badge or label.
              </li>
              <li>
                <b>4.</b> Notification or Confirmation Email: You may have
                received a confirmation email or notification when you upgraded
                to premium.
              </li>
            </ul>
            <p>
              If you're still unsure, contact customer support for assistance.
            </p>
          </>
        )
      },
      {
        title: 'How to verify my account?',
        render: () => (
          <>
            <p>Yes, you can verify your account by following these steps:</p>
            <ul className='space-y-2 pt-2 pb-2'>
              <li>
                <b>1.</b> Go to Account Settings: Access your account settings
                from your profile.
              </li>
              <li>
                <b>2.</b> Select KYC Details: Navigate to the KYC (Know Your
                Customer) section.
              </li>
              <li>
                <b>3.</b> Upload Your ID: Provide a clear photo of a
                government-issued ID, such as a passport, driver’s license, or
                national ID card.{' '}
              </li>
              <li>
                <b>4.</b> Photo Verification: Submit a recent selfie or use the
                in-app photo verification tool to match your photo with the ID
                provided.
              </li>
            </ul>

            <p>
              Your documents will be reviewed, and you’ll receive a notification
              once the verification process is complete.
            </p>
          </>
        )
      },
      {
        title: 'How do I change my login details?',
        render: () => (
          <>
            <p>Yes, you can update your login details. Here's how:</p>

            <ul className='space-y-2 pt-2 pb-2'>
              <li>
                <b>1.</b> Go to Account Settings.
              </li>
              <li>
                <b>2.</b> Select Login Details.
              </li>
              <li>
                <b>3.</b> Update your Email, Password, or Mobile Number as
                needed.{' '}
              </li>
            </ul>
            <p>Make sure to save your changes for them to take effect.</p>
          </>
        )
      },
      {
        title:
          'What is the difference between dating, long term, and social profiles?',
        render: () => (
          <>
            <p>
              Dating profiles are geared toward users seeking casual or serious
              relationships.
              <br />
              Long Term profiles are for those looking for a lifelong partner.
              You can indicate your preference during the signup process or
              switch between them later in your profile settings.
              <br />
              Social Profiles are designed for those seeking friends, groups,
              and events. This feature helps you expand your social connections
              and build meaningful relationships.
            </p>
          </>
        )
      }
    ]
  },
  {
    id: 3,
    title: 'Payment',
    slug: 'payment',
    questions: [
      {
        title: 'What payment methods do you accept?',
        render: () => (
          <>
            <p>We accept a wide range of payment methods, including:</p>
            <ul className='space-y-2 pt-2 pb-2 '>
              <li>
                <b>1.</b> Credit/Debit Cards (Visa, MasterCard, American
                Express)
              </li>
              <li>
                <b>2.</b> Digital Wallets (PayPal, Google Pay, Apple Pay)
              </li>
              <li>
                <b>3.</b> Net Banking and UPI (for users in supported regions)
              </li>
              <li>
                <b>4.</b> Mobile Payments (where available)
              </li>
            </ul>
          </>
        )
      },
      {
        title: 'Is my payment information secure?',
        answer:
          'Yes, we use secure Razorpay payment gateways to protect your payment information. All transactions are encrypted and processed safely, ensuring the confidentiality of your data'
      },
      {
        title: 'Do you offer refunds?',
        answer:
          'Refunds are generally not provided after a subscription has been activated, except in cases of accidental charges or technical issues. Please contact our support team within 14 days of purchase for refund inquiries.'
      },
      {
        title: 'How do I renew my subscription?',
        answer:
          'If you have enabled auto-renewal, your subscription will renew automatically at the end of each billing cycle. You can manage or disable auto-renewal in the Plan Details section of your account settings.'
      },
      {
        title: 'What happens if my payment fails?',
        answer:
          'If your payment fails, you will receive a notification with the option to update your payment details. Your subscription will remain active for a short grace period, during which you can resolve the payment issue.'
      },
      {
        title: 'How can I contact support for billing issues?',
        render: () => (
          <>
            <p>
              If you encounter any issues related to billing or payments, you
              can reach out to our support team via email at
              <b>[support@happymilan]</b> or through the Help & Support section
              in your account dashboard.
            </p>
          </>
        )
      }
    ]
  },
  {
    id: 4,
    title: 'Plans',
    slug: 'plans',
    questions: [
      {
        title: 'What types of membership plans are available?',
        render: () => (
          <>
            <p>
              We offer various membership plans to cater to different needs:
            </p>
            <ul className='space-y-2 pt-2 pb-2'>
              <li className='flex space-x-2'>
                <span>
                  <b>Silver :</b>
                </span>
                <p>
                  Includes Send message unto 10 profile | Send requests up to 10
                  profiles | Online support available explore.
                </p>
              </li>
              <li className='flex space-x-2'>
                <span>
                  <b>Gold Plan: </b>
                </span>
                <p>
                  includes Send message unto 20 profile | Send requests up to 20
                  profiles | Online support available.
                </p>
              </li>
              <li className='flex space-x-2'>
                <span>
                  <b>Platinum Plan:</b>
                </span>
                <p>
                  includes Send message unto 30 profile | Send requests up to 30
                  profiles | Online support available.
                </p>
              </li>
            </ul>
          </>
        )
      },
      {
        title: 'How do I upgrade to a premium membership?',
        answer:
          "You can upgrade to a premium membership by clicking on the 'Upgrade' button in your profile or in header menu Follow the instructions to choose a plan and complete the payment process."
      },
      {
        title: 'What is your cancellation policy?',
        answer:
          'After upgrading, you can cancel your subscription within 24 hours. Beyond this period, cancellations will no longer be possible. For more information, feel free to contact us via online chat or email us at support@happymilan.com.'
      },
      {
        title: 'How do I change my membership plan?',
        answer:
          "You can change your membership plan by going to 'Account Settings' and selecting 'Membership Plans.' Choose your preferred plan and follow the instructions to upgrade or downgrade."
      },
      {
        title: 'Can I cancel my subscription?',
        answer:
          'Yes, you can cancel your subscription at any time. If you cancel during an active subscription period, your premium features will remain available until the end of the billing cycle. After that, your account will revert to a free plan.'
      }
    ]
  },
  {
    id: 5,
    title: 'KYC',
    slug: 'kyc',
    questions: [
      {
        title: 'What is KYC, and why is it required on HappyMilan?',
        answer:
          'KYC (Know Your Customer) is a process of verifying the identity of our users to ensure a safe and secure platform. It helps us prevent fake profiles, scams, and misuse of the platform. KYC verification adds an extra layer of trust, particularly for users looking for serious relationships and matrimonial connections.'
      },
      {
        title: 'How do I complete my KYC verification?',
        render: () => (
          <>
            <p>To complete your KYC verification, follow these steps:</p>
            <ul className='space-y-2 pt-2 pb-2'>
              <li>
                <p>Go to your Account Setting and select KYC Details</p>
              </li>
              <li>
                <p>
                  <b>Upload ID :</b> &nbsp; Upload a clear photo of a
                  government-issued ID (such as a passport, driver’s license, or
                  national ID card).
                </p>
              </li>
              <li>
                <p>
                  <b>Photo Verifiy :</b> &nbsp; Submit a recent selfie or use
                  the platform’s in-app photo verification process to match with
                  your ID.
                </p>
              </li>
            </ul>
            <p>
              Your documents will be reviewed, and you will be notified once the
              verification is complete.
            </p>
          </>
        )
      },
      {
        title: 'What documents are accepted for KYC verification?',
        render: () => (
          <>
            <p>
              We accept the following types of documents for KYC verification:
            </p>
            <ul className='space-y-2 pt-2 pb-2'>
              <li>
                <p>
                  <b>- Passport</b>
                </p>
              </li>
              <li>
                <p>
                  <b>- Driver’s License</b>
                </p>
              </li>
              <li>
                <p>
                  <b>- National ID Card</b>
                </p>
              </li>
              <li>
                <p>
                  <b>- Voter’s ID</b>
                </p>
              </li>
            </ul>
            (if applicable) Please ensure that your document is valid, clearly
            visible, and matches the details on your profile.
          </>
        )
      },
      {
        title: 'How long does it take for KYC verification to be completed?',
        answer:
          'The KYC verification process typically takes 24-48 hours. You will receive a notification once your documents have been reviewed and your verification status has been updated. If there are any issues with the documents submitted, you may be asked to re-upload them.'
      },
      {
        title: 'Is my KYC information secure?',
        answer:
          'Yes, your KYC information is encrypted and stored securely. We use industry-standard security measures to ensure that your personal data is protected and is only used for verification purposes. We do not share your KYC details with any third parties.'
      },
      {
        title: 'Why does Happ Milan require a selfie for KYC?',
        answer:
          'The selfie is required to ensure that the person submitting the KYC documents matches the person in the ID. This helps us prevent identity fraud and ensure a higher level of safety on the platform.'
      },
      {
        title: 'Do I need to complete KYC verification to use the platform?',
        answer:
          'While basic features may be accessible without KYC verification, completing it is strongly recommended for accessing premium features and building trust with other users. KYC is mandatory for users who wish to use certain features like matrimony services, secure messaging, and profile boosts.'
      },
      {
        title: 'Is KYC verification free of charge?',
        answer:
          'Yes, KYC verification is completely free of charge for all users. It is part of our commitment to providing a secure environment for meaningful connections.'
      }
    ]
  },
  {
    id: 6,
    title: 'Safety',
    slug: 'safety',
    questions: [
      {
        title: 'How do I report a suspicious or fake profile?',
        answer:
          "If you encounter a profile that seems suspicious or violates our terms of service, you can report it using the 'Report' button on their profile page. Our team will review the report and take appropriate action."
      },
      {
        title: 'Can I block someone from contacting me?',
        answer:
          "Yes, you can block users who you do not wish to interact with. Go to their profile and select the 'Block' option. They will no longer be able to see your profile or contact you."
      },
      {
        title: 'How is my privacy protected?',
        answer:
          'Your privacy is our top priority. We do not share your personal information without your consent. You can also control who sees your profile and who can contact you through your privacy settings.'
      },
      {
        title: 'Are there safety tips for online dating and connecting?',
        answer:
          'Yes, we recommend never sharing personal or financial information with anyone you meet online, meeting in public places for the first few dates, and trusting your instincts. We also have a list of safety tips available in our Help Center.'
      },
      {
        title: 'What should I do to stay safe while using the platform?',
        render: () => (
          <>
            <p>Here are some tips to help you stay safe:</p>
            <ul>
              <li>
                <p>
                  <b>Do Not Share Personal Information: </b> &nbsp; Avoid
                  sharing sensitive information like your address, financial
                  details, or work location until you are comfortable with the
                  other person.
                </p>
              </li>
              <li>
                <p>
                  <b>Meet in Public Places: </b> &nbsp; For in-person meetings,
                  choose public locations like cafes or parks and inform a
                  friend or family member about your plans.
                </p>
              </li>
              <li>
                <p>
                  <b>Trust Your Instincts:</b> &nbsp; If someone makes you feel
                  uncomfortable or pressures you, trust your instincts and
                  consider blocking or reporting them.
                </p>
              </li>
            </ul>
          </>
        )
      },
      {
        title: 'How do you handle fake profiles?',
        answer:
          'We use automated systems and manual review processes to detect like KYC & Selfie Verification and remove fake profiles. If you come across a profile that seems suspicious or fake, please report it so that our team can take action.'
      },
      {
        title: 'Can other users see my location?',
        answer:
          'Your exact location is never shared with other users. We may show approximate distances to help users find nearby matches, but your specific location remains private.'
      }
    ]
  },
  {
    id: 7,
    title: 'Members',
    slug: 'members',
    questions: [
      {
        title: 'How do I find a match?',
        render: () => (
          <>
            <p>
              {' '}
              You can use our advanced search filters to find profiles that
              match your preferences. Our recommendation algorithm will also
              suggest potential matches based on your interests, location, and
              preferences.&nbsp; <b>Home</b> &nbsp;/&nbsp; <b>Search</b>&nbsp;
              (Add your preference criterial to find suitable partner)
            </p>
          </>
        )
      },
      {
        title: 'Can I unfriend the accepted request?',
        answer:
          "You can remove accepted friends by clicking the three-dot menu and selecting the 'Unfriend' option."
      },
      {
        title: 'Which members will show on chat?',
        answer:
          "In the chat area, you will only see members who have accepted your requests, those who have sent you requests that you've accepted, or those to whom you've sent chat requests."
      },
      {
        title: 'What if I face technical issues while using the website?',
        answer:
          "If you encounter any technical issues, please contact our customer support team through the 'Help' section. We are here to assist you with any concerns or questions."
      }
    ]
  },
  {
    id: 8,
    title: 'Discounts & Offers',
    slug: 'offers',
    questions: [
      {
        title: 'Are there any discounts or promotions available?',
        answer:
          'We occasionally offer discounts and special promotions for new users or during holiday periods. Keep an eye on our website or subscribe to our newsletter to stay updated on the latest offers.'
      }
    ]
  }
]
