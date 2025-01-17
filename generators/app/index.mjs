"use strict";
import Generator from "yeoman-generator";

export default class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    // this.log(
    //   yosay(
    //     `Welcome to the priceless ${chalk.red(
    //       "generator-android-kotlin-compose"
    //     )} generator!`
    //   )
    // );

    const prompts = [
      {
        type: "input",
        name: "packageName",
        message: "What is the package name of your project?",
        default: "com.example.myapp"
      },
      {
        type: "input",
        name: "appName",
        message: "What is the name of your application?",
        default: "Hello World"
      },
      {
        type: "input",
        name: "internalName",
        message: "What is the internal name of your project?",
        default: "HelloWorld"
      },
      {
        type: "input",
        name: "projectRoot",
        message: "What is the root directory of your project?",
        default: "hello-world"
      }
    ];

    const props = await this.prompt(prompts);
    // To access props later use this.props.someAnswer;
    this.props = props;
  }

  writing() {
    const packagePath = this.props.packageName.replace(/\./g, "/");

    this.log("Processing files...");
    this.log(".vscode/launch.json");
    this.fs.copyTpl(
      this.templatePath(".vscode/launch.json"),
      this.destinationPath(".vscode/launch.json"),
      { packageName: this.props.packageName }
    );

    this.log(".vscode/tasks.json");
    this.fs.copy(
      this.templatePath(".vscode/tasks.json"),
      this.destinationPath(".vscode/tasks.json")
    );

    this.log(".gitattributes");
    this.fs.copy(
      this.templatePath(".gitattributes"),
      this.destinationPath(".gitattributes")
    );

    this.log(".gitignore");
    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );

    this.log("build.gradle.kts");
    this.fs.copy(
      this.templatePath("build.gradle.kts"),
      this.destinationPath("build.gradle.kts")
    );

    this.log("gradle.properties");
    this.fs.copy(
      this.templatePath("gradle.properties"),
      this.destinationPath("gradle.properties")
    );

    this.log("gradlew");
    this.fs.copy(this.templatePath("gradlew"), this.destinationPath("gradlew"));

    this.log("gradlew.bat");
    this.fs.copy(
      this.templatePath("gradlew.bat"),
      this.destinationPath("gradlew.bat")
    );

    this.log("settings.gradle.kts");
    this.fs.copyTpl(
      this.templatePath("settings.gradle.kts"),
      this.destinationPath("settings.gradle.kts"),
      { projectRoot: this.props.projectRoot }
    );

    this.log("app/proguard-rules.pro");
    this.fs.copy(
      this.templatePath("app/proguard-rules.pro"),
      this.destinationPath("app/proguard-rules.pro")
    );

    this.log("gradle/wrapper/gradle-wrapper.jar");
    this.fs.copy(
      this.templatePath("gradle/wrapper/gradle-wrapper.jar"),
      this.destinationPath("gradle/wrapper/gradle-wrapper.jar")
    );

    this.log("gradle/wrapper/gradle-wrapper.properties");
    this.fs.copy(
      this.templatePath("gradle/wrapper/gradle-wrapper.properties"),
      this.destinationPath("gradle/wrapper/gradle-wrapper.properties")
    );

    this.log("gradle/libs.versions.toml");
    this.fs.copy(
      this.templatePath("gradle/libs.versions.toml"),
      this.destinationPath("gradle/libs.versions.toml")
    );

    this.log("app/build.gradle.kts");
    this.fs.copyTpl(
      this.templatePath("app/build.gradle.kts"),
      this.destinationPath("app/build.gradle.kts"),
      { packageName: this.props.packageName }
    );

    this.log("app/src/main/AndroidManifest.xml");
    this.fs.copyTpl(
      this.templatePath("app/src/main/AndroidManifest.xml"),
      this.destinationPath("app/src/main/AndroidManifest.xml"),
      { internalName: this.props.internalName }
    );

    this.log("app/src/main/res/drawable/ic_launcher_background.xml");
    this.fs.copy(
      this.templatePath("app/src/main/res/drawable/ic_launcher_background.xml"),
      this.destinationPath(
        "app/src/main/res/drawable/ic_launcher_background.xml"
      )
    );

    this.log("app/src/main/res/drawable/ic_launcher_foreground.xml");
    this.fs.copy(
      this.templatePath("app/src/main/res/drawable/ic_launcher_foreground.xml"),
      this.destinationPath(
        "app/src/main/res/drawable/ic_launcher_foreground.xml"
      )
    );

    this.log("app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml");
    this.fs.copy(
      this.templatePath("app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml"),
      this.destinationPath("app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml")
    );

    this.log("app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml");
    this.fs.copy(
      this.templatePath(
        "app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml"
      ),
      this.destinationPath(
        "app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml"
      )
    );

    this.log("app/src/main/res/mipmap-hdpi/ic_launcher.webp");
    this.fs.copy(
      this.templatePath("app/src/main/res/mipmap-hdpi/ic_launcher.webp"),
      this.destinationPath("app/src/main/res/mipmap-hdpi/ic_launcher.webp")
    );

    this.log("app/src/main/res/mipmap-hdpi/ic_launcher_round.webp");
    this.fs.copy(
      this.templatePath("app/src/main/res/mipmap-hdpi/ic_launcher_round.webp"),
      this.destinationPath(
        "app/src/main/res/mipmap-hdpi/ic_launcher_round.webp"
      )
    );

    this.log("app/src/main/res/mipmap-mdpi/ic_launcher.webp");
    this.fs.copy(
      this.templatePath("app/src/main/res/mipmap-mdpi/ic_launcher.webp"),
      this.destinationPath("app/src/main/res/mipmap-mdpi/ic_launcher.webp")
    );

    this.log("app/src/main/res/mipmap-mdpi/ic_launcher_round.webp");
    this.fs.copy(
      this.templatePath("app/src/main/res/mipmap-mdpi/ic_launcher_round.webp"),
      this.destinationPath(
        "app/src/main/res/mipmap-mdpi/ic_launcher_round.webp"
      )
    );

    this.log("app/src/main/res/mipmap-xhdpi/ic_launcher.webp");
    this.fs.copy(
      this.templatePath("app/src/main/res/mipmap-xhdpi/ic_launcher.webp"),
      this.destinationPath("app/src/main/res/mipmap-xhdpi/ic_launcher.webp")
    );

    this.log("app/src/main/res/mipmap-xhdpi/ic_launcher_round.webp");
    this.fs.copy(
      this.templatePath("app/src/main/res/mipmap-xhdpi/ic_launcher_round.webp"),
      this.destinationPath(
        "app/src/main/res/mipmap-xhdpi/ic_launcher_round.webp"
      )
    );

    this.log("app/src/main/res/mipmap-xxhdpi/ic_launcher.webp");
    this.fs.copy(
      this.templatePath("app/src/main/res/mipmap-xxhdpi/ic_launcher.webp"),
      this.destinationPath("app/src/main/res/mipmap-xxhdpi/ic_launcher.webp")
    );

    this.log("app/src/main/res/mipmap-xxhdpi/ic_launcher_round.webp");
    this.fs.copy(
      this.templatePath(
        "app/src/main/res/mipmap-xxhdpi/ic_launcher_round.webp"
      ),
      this.destinationPath(
        "app/src/main/res/mipmap-xxhdpi/ic_launcher_round.webp"
      )
    );

    this.log("app/src/main/res/mipmap-xxxhdpi/ic_launcher.webp");
    this.fs.copy(
      this.templatePath("app/src/main/res/mipmap-xxxhdpi/ic_launcher.webp"),
      this.destinationPath("app/src/main/res/mipmap-xxxhdpi/ic_launcher.webp")
    );

    this.log("app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp");
    this.fs.copy(
      this.templatePath(
        "app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp"
      ),
      this.destinationPath(
        "app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp"
      )
    );

    this.log("app/src/main/res/values/strings.xml");
    this.fs.copyTpl(
      this.templatePath("app/src/main/res/values/strings.xml"),
      this.destinationPath("app/src/main/res/values/strings.xml"),
      { appName: this.props.appName }
    );

    this.log("app/src/main/res/values/themes.xml");
    this.fs.copyTpl(
      this.templatePath("app/src/main/res/values/themes.xml"),
      this.destinationPath("app/src/main/res/values/themes.xml"),
      { internalName: this.props.internalName }
    );

    this.log("app/src/main/kotlin/MainActivity.kt");
    this.fs.copyTpl(
      this.templatePath("app/src/main/kotlin/MainActivity.kt"),
      this.destinationPath(
        `app/src/main/kotlin/${packagePath}/MainActivity.kt`
      ),
      {
        packageName: this.props.packageName,
        internalName: this.props.internalName
      }
    );

    this.log("app/src/main/kotlin/ui/theme/Color.kt");
    this.fs.copyTpl(
      this.templatePath("app/src/main/kotlin/ui/theme/Color.kt"),
      this.destinationPath(
        `app/src/main/kotlin/${packagePath}/ui/theme/Color.kt`
      ),
      { packageName: this.props.packageName }
    );

    this.log("app/src/main/kotlin/ui/theme/Type.kt");
    this.fs.copyTpl(
      this.templatePath("app/src/main/kotlin/ui/theme/Type.kt"),
      this.destinationPath(
        `app/src/main/kotlin/${packagePath}/ui/theme/Type.kt`
      ),
      { packageName: this.props.packageName }
    );

    this.log("app/src/main/kotlin/ui/theme/Theme.kt");
    this.fs.copyTpl(
      this.templatePath("app/src/main/kotlin/ui/theme/Theme.kt"),
      this.destinationPath(
        `app/src/main/kotlin/${packagePath}/ui/theme/Theme.kt`
      ),
      {
        packageName: this.props.packageName,
        internalName: this.props.internalName
      }
    );
  }

  install() {
    this.spawnCommand("gradlew", ["assembleDebug"]);
  }
}
