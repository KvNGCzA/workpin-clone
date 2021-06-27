<template>
  <div class="terms-page">
    <h1>Terms of Use</h1>
    <section>
      <p class="content">
        This page (together with the documents referred to on it) tells you the
        terms of use on which you may make use of our website workpin.ai (our
        site). Please read these terms of use carefully before you start to use
        the site. By using our site, you indicate that you accept these terms of
        use and that you agree to abide by them. If you do not agree to these
        terms of use, please refrain from using our site.
      </p>
    </section>
    <section v-for="term in terms" :key="term.head">
      <p class="head">{{ term.head }}</p>
      <p class="content" v-for="content of term.content" :key="content.body">
        <span v-if="content.type !== 'list'">{{ content.body }}</span>
        <ul v-else>
          <li v-for="body in content.body" :key="body">{{body}}</li>
        </ul>
      </p>
    </section>
  </div>
</template>


<script>
export default {
  name: "Terms",
  data() {
    return {
      terms: [
        {
          head: "INFORMATION ABOUT US",
          content: [
            {
              body: "workpin.ai is a site operated by workpin ltd. (We) whose principal office is at 34 Parkville Road, London SW6 7BX, United Kingdom.",
            },
          ],
        },
        {
          head: "ACCESSING OUR WEBSITE",
          content: [
            {
              body: "Access to our site is permitted on a temporary basis, and we reserve the right to withdraw or amend the service we provide on our site without notice (see below). We will not be liable if for any reason our site is unavailable at any time or for any period.\nFrom time to time, we may restrict access to some parts of our site, or our entire site, to users who have registered with us.\nYou are responsible for making all arrangements necessary for you to have access to our site. You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms, and that they comply with them.",
            },
          ],
        },
        {
          head: "INTELLECTUAL PROPERTY RIGHTS",
          content: [
            {
              body: "We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.",
            },
            {
              body: "You may print off a copy, and may download extracts, of any page(s) from our site for your personal reference and you may draw the attention of others within your organisation to material posted on our site.",
            },
            {
              body: "You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.",
            },
            {
              body: "Our status (and that of any identified contributors) as the authors of material on our site must always be acknowledged.",
            },
            {
              body: "You must not use any part of the materials on our site for commercial purposes without obtaining a licence to do so from us or our licensors. If you print off, copy or download any part of our site in breach of these terms of use, your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.",
            },
          ],
        },
        {
          head: "RELIANCE ON INFORMATION POSTED",
          content: [
            {
              body: "Commentary and other materials posted on our site are not intended to amount to advice on which reliance should be placed. We therefore disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to our site, or by anyone who may be informed of any of its contents.",
            },
          ],
        },
        {
          head: "OUR SITE CHANGES REGULARLY",
          content: [
            {
              body: "We aim to update our site regularly, and may change the content at any time. If the need arises, we may suspend access to our site, or close it indefinitely. Any of the material on our site may be out of date at any given time, and we are under no obligation to update such material.",
            },
          ],
        },
        {
          head: "OUR LIABILITY",
          content: [
            {
              body: "The material displayed on our site is provided without any guarantees, conditions or warranties as to its accuracy. To the extent permitted by law, we, other members of our group of companies and third parties connected to us hereby expressly exclude:",
            },
            {
              body: "All conditions, warranties and other terms which might otherwise be implied by statute, common law or the law of equity.",
            },
            {
              body: "Any liability for any direct, indirect or consequential loss or damage incurred by any user in connection with our site or in connection with the use, inability to use, or results of the use of our site, any websites linked to it and any materials posted on it, including, without limitation any liability for:",
            },
            {
              type: "list",
              body: [
                "loss of income or revenue;",
                "loss of business;",
                "loss of profits or contracts;",
                "loss of anticipated savings;",
                "loss of data;",
                "loss of goodwill;",
                "wasted management or office time; and",
                "for any other loss or damage of any kind, however arising and whether caused by tort (including negligence), breach of contract or otherwise, even if foreseeable, provided that this condition shall not prevent claims for loss of or damage to your tangible property or any other claims for direct financial loss that are not excluded by any of the categories set out above.",
              ],
            },
            {
              body: "This does not affect our liability for death or personal injury arising from our negligence, nor our liability for fraudulent misrepresentation or misrepresentation as to a fundamental matter, nor any other liability which cannot be excluded or limited under applicable law.",
            },
          ],
        },
        {
          head: "INFORMATION ABOUT YOU AND YOUR VISTS TO OUR SITE",
          content: [
            {
              body: "We process information about you in accordance with our Privacy Policy. By using our site, you consent to such processing and you warrant that all data provided by you is accurate.",
            },
          ],
        },
        {
          head: "VIRUSES, HACKING AND OTHER OFFENCES",
          content: [
            {
              body: "You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of service attack.",
            },
            {
              body: "By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will cooperate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately.",
            },
            {
              body: "We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our site or to your downloading of any material posted on it, or on any website linked to it.",
            },
          ],
        },
        {
          head: "LINKING TO OUR WEBSITE",
          content: [
            {
              body: "You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists and in particular you must not display our logo without our consent.",
            },
            {
              body: "You must not establish a link from any website that is not owned by you.",
            },
            {
              body: "Our site must not be framed on any other site, nor may you create a link to any part of our site other than the home page. We reserve the right to withdraw linking permission without notice. The website from which you are linking must comply in all respects (both in spirit and to the letter) with the following content standards:",
            },
            {
              body: "The content of such sites must:",
            },
            {
              type: "list",
              body: [
                "Be accurate (where they state facts).",
                "Be genuinely held (where they state opinions).",
                "Comply with applicable law in the UK and in any country from which they are posted.",
                "The site must not:",
                "Contain any material which is defamatory of any person.",
                "Contain any material which is obscene, offensive, hateful or inflammatory.",
                "Promote sexually explicit material.",
                "Promote violence.",
                "Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.",
                "Infringe any copyright, database right or trade mark of any other person.",
                "Be likely to deceive any person.",
                "Be in breach of any legal duty owed to a third party, such as a contractual duty or a duty of confidence.",
                "Promote any illegal activity.",
                "Be threatening, abuse or invade another's privacy, or cause annoyance, inconvenience or needless anxiety.",
                "Be likely to harass, upset, embarrass, alarm or annoy any other person.",
                "Be used to impersonate any person, or to misrepresent its identity or affiliation with any person.",
                "Advocate, promote or assist any unlawful act such as (by way of example only) copyright infringement or computer misuse.",
              ],
            },
            {
              body: "If you wish to make any use of material on our site other than that set out above, please address your request to team@workpin.ai.",
            },
          ],
        },
        {
          head: "LINKS FROM OUR SITE",
          content: [
            {
              body: "Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them.",
            },
          ],
        },
        {
          head: "JURISDICTION AND APPLICABLE LAW",
          content: [
            {
              body: "The English courts will have exclusive jurisdiction over any claim arising from, or related to, a visit to our site.\nThese terms of use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.",
            },
          ],
        },
        {
          head: "TRADEMARKS AND COPYRIGHTS",
          content: [
            {
              body: "All trademarks, service marks, trade names, logos, and icons are proprietary to workpin Ltd. Nothing contained on this website should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark displayed on this website without our written permission. Your use of the trademarks displayed on this website, or any other content on this website, except as provided herein, is strictly prohibited. Images displayed on this website are either the property of, or used with the permission by us. The use of these images by you, or anyone else authorized by you, is prohibited unless specifically permitted by us. Any unauthorized use of images may violate copyright laws, trademark laws, the laws of privacy and publicity, and communications regulations and statutes.",
            },
          ],
        },
        {
          head: "UPDATES",
          content: [
            {
              body: "We may revise these terms of use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you. Some of the provisions contained in these terms of use may also be superseded by provisions or notices published elsewhere on our site. If any portion of these Terms of Use is found to be unenforceable, the remaining sections of the Terms of Use will remain in effect.",
            },
          ],
        },
        {
          head: "YOUR CONCERNS",
          content: [
            {
              body: "If you have any concerns about material which appears on our site, please contact: team@workpin.ai\nThank you for visiting our site",
            },
          ],
        },
        {
          content: [
            {
              body: "Last updated December 2020.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
